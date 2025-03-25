import { createClient } from "@supabase/supabase-js"
import config from "./key"

const supabaseUrl = config.SUPABASE_URL
const supabaseKey = config.SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export const testFetch = async () => {
  const { data, error } = await supabase.from("test_data").select("foo").eq("id", 2)
  console.log(data[0])
  return data[0].foo
}

export const testUpdate = async (newData) => {
  const { data, error } = await supabase.from("test_data").update({ foo: newData }).eq("id", 2).select()
  console.log(data)
}
