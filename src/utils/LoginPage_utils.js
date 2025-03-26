import { userSignInPassword } from "../api/userAuth"

export const handleLoginButtonPressed = async (email, password) => {
  const authState = await userSignInPassword(email, password)
  if (authState) {
    console.log("Login Success!")
  }
}
