import React from "react"
import { userSignOut } from "../api/userAuth"
import { useNavigate } from "react-router-dom"

export default function TestHome() {
  const navigate = useNavigate()
  const handleOut = async () => {
    await userSignOut()
    navigate("/")
  }
  return (
    <div>
      <p>test home</p>
      <button onClick={handleOut}>sign out</button>
    </div>
  )
}
