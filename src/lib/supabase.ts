import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jictdrtbdksjemetydfo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppY3RkcnRiZGtzamVtZXR5ZGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5Mzg2NjAsImV4cCI6MjA3NTUxNDY2MH0.19H6vjQMOTDpbOzkQCvO7RLtca0_nd-3XwzdfDyHfLg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
