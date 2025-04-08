import React from "react"
import { useNavigate } from "react-router-dom"
import { userSignOut } from "../api/userAuth"

export const SignOutButton = () => {
  const navigate = useNavigate()
  const handleOut = async () => {
    await userSignOut()
    navigate("/")
  }
  return (
    <span onClick={() => handleOut()} style={{ cursor: "pointer", color: "black" }}>
      Sign Out
    </span>
  )
}
