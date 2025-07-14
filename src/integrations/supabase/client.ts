import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pfskhdfgeqigngbnsamv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmc2toZGZnZXFpZ25nYm5zYW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNDM3MTQsImV4cCI6MjA2NzkxOTcxNH0.zWwY5y9F95maU7ivHOw7--K8vBAlD8I4uKeLd97R-bg";

// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});