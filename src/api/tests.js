import { supabase } from "./client"

export const testFetch = async () => {
  const { data } = await supabase.from("test_data").select("foo").eq("id", 2)
  console.log(data[0])
  return data[0].foo
}

export const testUpdate = async (newData) => {
  const { data } = await supabase.from("test_data").update({ foo: newData }).eq("id", 2).select()
  console.log(data)
}
