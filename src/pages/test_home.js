import React, { useEffect, useState } from "react"
import { userSignOut } from "../api/userAuth"
import { useNavigate } from "react-router-dom"
import { useSession } from "../context/sessionContext"
import { getUserDisplayName } from "../api/user"

export default function TestHome() {
  const navigate = useNavigate()
  const { session } = useSession()
  const [userID, setUserID] = useState("")
  const [displayName, setDisplayName] = useState("")
  useEffect(() => {
    try {
      if (session.user.id) {
        setUserID(session.user.id)
        setDisplayName(getUserDisplayName(session.user.id))
      }
    } catch {
      console.log("Session ID not found")
      navigate("/")
    }
  }, [session])
  const handleOut = async () => {
    await userSignOut()
    navigate("/")
  }
  return (
    <div style={containerStyle}>
      <p style={{ color: "white" }}>Welcome {displayName}</p>
      <p style={{ color: "white" }}>user id: {userID}</p>
      <button onClick={handleOut}>Sign out</button>
      <button onClick={() => navigate("/test")}>Go to test page</button>
    </div>
  )
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#1e1e1e",
}
