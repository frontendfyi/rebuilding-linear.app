import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://ulfwdudljfykdsxlslnl.supabase.co";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
// export const supabase = createClient(supabaseUrl, supabaseKey);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default supabase;
