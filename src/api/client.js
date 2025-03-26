import { createClient } from "@supabase/supabase-js"
import config from "./key"

const supabaseUrl = config.SUPABASE_URL
const supabaseKey = config.SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
