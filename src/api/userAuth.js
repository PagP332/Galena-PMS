import { useNavigate } from "react-router-dom"
import { supabase } from "./client"

/**
 * Event Listener for Auth Change, checks when a user has succesfully signed in into the webpage
 * @returns Returns the session itself when successful, falsey if not
 */
export const userSignedInListener = () => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED IN") {
      console.log("Signed in session success:", session)
      return session
    } else return false
  })
}

/**
 * Handler for creating new users and signing up users into the database, requires email and password. Auth checks are done server-side
 * @param {*} email
 * @param {*} password
 * @returns Returns data is success signed in, falsey if not
 */
export const newUserSignUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  console.log(data)
  if (error) {
    console.log(`There was an error authenticating: ${error}`)
    return false
  } else {
    return data
  }
}

/**
 * Sign in user with given email and password, does not prompt OTP.
 * @param {*} email
 * @param {*} password
 * @returns Returns data is success signed in, falsey if not
 */
export const userSignInPassword = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  console.log(data)
  if (error) {
    console.log(`There was an error authenticating: ${error}`)
    return false
  } else {
    return data
  }
}

/**
 * Sign in user with given email, sign in verified thru redirect link sent via OTP in given email.
 * @param {*} email
 * @param {*} redirectLink
 * @returns
 */
export const userSignInEmailOTP = async (email, redirectLink) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: redirectLink,
    },
  })
  console.log(data)
  if (error) {
    console.log(`There was an error authenticating: ${error}`)
    return false
  } else {
    return data
  }
}

export const userSignOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(`There was an error authenticating: ${error}`)
  } else {
    console.log("Successfully logged out")
  }
}
