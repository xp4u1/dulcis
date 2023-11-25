import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  "https://gzjkpalnykqlfihddjmo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6amtwYWxueWtxbGZpaGRkam1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NjE5MzAsImV4cCI6MjAxNjQzNzkzMH0.nN8IWpELh9EMVf6vMMXbd44VPjO4A9Nru12rtnqcU4M"
);
