import React from "react"
import { supabase } from "./client"

export const fetchAvailableLocations = async () => {
  try {
    let { data, error } = await supabase.from("Locations").select("*")
    if (error) {
      throw error
    } else {
      console.log("Locations: ", data)
      return data
    }
  } catch (e) {
    console.log("Error fetching locations: ", e)
    return null
  }
}

export const fetchAvailableProperties = async () => {
  try {
    let { data, error } = await supabase.from("Properties").select("*")
    if (error) {
      throw error
    } else {
      console.log("Properties: ", data)
      return data
    }
  } catch (e) {
    console.log("Error fetching properties: ", e)
    return null
  }
}

export const addNewLocation = async (locationName) => {
  try {
    const { data, error } = await supabase.from("Locations").insert([
      {
        name: locationName,
      },
    ])
    if (error) throw error
    else alert("Succesfully added a new location")
  } catch (e) {
    console.log("Error adding new location: ", e)
    return null
  }
}

export const addNewProperty = async (newProperty, newPropertyLocation, newPropertyAddress) => {
  try {
    const { data, error } = await supabase.from("Properties").insert([
      {
        property_name: newProperty,
        location_id: newPropertyLocation,
        address: newPropertyAddress,
      },
    ])
    if (error) throw error
    else alert("Succesfully added a new location")
  } catch (e) {
    console.log("Error adding new location: ", e)
    return null
  }
}

export const deleteLocation = async (locationID) => {
  try {
    const { error } = await supabase.from("Locations").delete().eq("location_id", locationID)
    if (error) throw error
    else alert("Succesfully deleted location")
  } catch (e) {
    console.log("Error deleting location: ", e)
    return null
  }
}
