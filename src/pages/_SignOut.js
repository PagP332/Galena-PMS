import { useNavigate } from "react-router-dom"
import { userSignOut } from "../api/userAuth"

export const SignOut = () => {
  const navigate = useNavigate()
  const handleOut = async () => {
    await userSignOut()
    navigate("/")
  }
  handleOut()
  return
}
