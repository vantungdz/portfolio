import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Copy .env.example to .env.local and fill in your Supabase project credentials."
  );
}

/**
 * Single Supabase client (anon key) used both server-side (RSC data fetching,
 * read-only) and client-side (contact form insert). Safe to share because RLS
 * policies restrict anon access to public reads + contact_messages inserts.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
