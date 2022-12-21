import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supaClient = createClient(URL, KEY);

// supaClient.from('user_profiles').select('*').then(({ data, error }) => {

// });

export default supaClient;