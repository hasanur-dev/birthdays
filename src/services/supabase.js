import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tonkoroxtuezfslcrdis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbmtvcm94dHVlemZzbGNyZGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNzU2NDgsImV4cCI6MjAyNjY1MTY0OH0.E0cBVW916k4A4WZnMhF8U9LDR15Rx1eg4V7P78myxyc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
