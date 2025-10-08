import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

interface EmailGateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EmailGateModal = ({ open, onOpenChange }: EmailGateModalProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) throw error;

      setSent(true);
      toast({
        title: "Check your email",
        description: "We've sent you a magic link to verify your email.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send verification email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card/95 backdrop-blur-sm border border-primary/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-foreground flex items-center gap-2">
            <span className="text-primary">{">"}</span>
            {sent ? "Email Sent" : "Email Verification Required"}
            <span className="text-primary animate-cursor-blink">_</span>
          </DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="space-y-4">
            <pre className="bg-background/50 border border-border rounded p-4 text-sm">
              <code>
                <span className="text-accent">$</span>{" "}
                <span className="text-foreground">check_inbox</span>
                {"\n"}
                <span className="text-muted-foreground">→ Magic link sent to:</span>
                {"\n"}
                <span className="text-primary">  {email}</span>
                {"\n\n"}
                <span className="text-muted-foreground">→ Click the link to continue</span>
              </code>
            </pre>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <pre className="text-sm text-muted-foreground">
                <code>
                  <span className="text-accent">//</span> Enter your email to access projects
                  {"\n"}
                  <span className="text-accent">//</span> You can view up to 5 projects per day
                </code>
              </pre>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-primary">{">"}</span>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="font-mono bg-background/50 border-border focus:border-primary"
                  disabled={loading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full group relative overflow-hidden"
              disabled={loading}
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Magic Link"}
              </span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
