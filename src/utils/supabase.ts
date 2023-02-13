import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv_values from "dotenv";

dotenv_values.config();

const supabaseUrl = "https://ulfwdudljfykdsxlslnl.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);
