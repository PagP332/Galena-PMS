import { supabase } from "./client"

export const getUserDisplayName = async (userId) => {
  console.log("Getting user display name ", userId)
  const { data, error } = await supabase.from("SpecialRoles").select("DisplayName").eq("UID", userId)
  if (!error) {
    // console.log("Display name: ", data)
    return data[0].DisplayName
  } else {
    console.log("Error getting user display name: ", error)
    return ""
  }
}

export const getUserRole = async (userId) => {
  console.log("Getting user role ", userId)
  const { data, error } = await supabase.from("SpecialRoles").select("Role").eq("UID", userId)
  if (!error) {
    // console.log("Display name: ", data)
    return data[0].Role
  } else {
    console.log("Error getting user display name: ", error)
    return ""
  }
}
