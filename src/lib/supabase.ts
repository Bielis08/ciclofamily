import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Faltan las variables de entorno PUBLIC_SUPABASE_URL y/o PUBLIC_SUPABASE_ANON_KEY. " +
    "Añádelas en Vercel (Settings > Environment Variables) o en tu archivo .env local."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
