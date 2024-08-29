import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABSE_URL,
  process.env.SUPABASE_KEY
);
