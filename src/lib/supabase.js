import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afrbdrerejbgkfyrgsso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcmJkcmVyZWpiZ2tmeXJnc3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzI2MTYsImV4cCI6MjA2NzU0ODYxNn0.r7Q4KdgAIFEYNvL7O8AbC7k01SkkA5qrwcZ8UC06y0U';

export const supabase = createClient(supabaseUrl, supabaseKey);