import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { toast } from '@/hooks/use-toast';

export const useProjectAccess = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkDailyLimit = async (userId: string): Promise<boolean> => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from('project_access')
      .select('id')
      .eq('user_id', userId)
      .gte('access_date', today.toISOString());

    if (error) {
      console.error('Error checking daily limit:', error);
      return false;
    }

    return (data?.length || 0) < 5;
  };

  const grantProjectAccess = async (projectId: string): Promise<boolean> => {
    if (!user) return false;

    // Check daily limit
    const withinLimit = await checkDailyLimit(user.id);
    if (!withinLimit) {
      toast({
        title: "Daily limit reached",
        description: "You've accessed 5 projects today. Please try again tomorrow.",
        variant: "destructive",
      });
      return false;
    }

    // Insert access record
    const { error } = await supabase
      .from('project_access')
      .insert({
        user_id: user.id,
        project_id: projectId,
        access_date: new Date().toISOString(),
      });

    if (error) {
      console.error('Error granting access:', error);
      toast({
        title: "Error",
        description: "Failed to grant project access",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    grantProjectAccess,
  };
};
