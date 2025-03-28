import { userSignInPassword } from "../api/userAuth"

// Contains utility functions used in the LoginPage component

export const handleLoginButtonPressed = async (email, password, setSession) => {
  try {
    const authState = await userSignInPassword(email, password)
    if (authState) {
      console.log("Login Success!")
      setSession(authState.session)
    }
  } catch (e) {
    alert(e)
  }
}
