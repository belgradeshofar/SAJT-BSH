import { createClient } from "@supabase/supabase-js";

// Povezivanje sa Supabase projektom
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
