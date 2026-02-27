import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL as string;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

  if (!supabaseUrl) throw new Error("Missing Supabase URL");
  if (!supabaseAnonKey) throw new Error("Missing Supabase Key");

  return createClient(supabaseUrl, supabaseAnonKey);
}