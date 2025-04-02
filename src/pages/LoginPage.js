import React, { useEffect, useState } from "react"
import { handleLoginButtonPressed } from "../utils/LoginPage_utils"
import { useSession } from "../context/sessionContext"
import { Navigate, useNavigate } from "react-router-dom"
import { getUserRole } from "../api/user"

const LoginPage = () => {
  const [formEmail, setFormEmail] = useState("") // State for the Email input of user
  const [formPassword, setFormPassword] = useState("") // State for the Password input of the user
  const { session, setSession, setUserID, setUserRole } = useSession() // For session context
  const navigate = useNavigate() // For routing navigation

  // On each render and state update, checks if there is an existing session (currently a user is logged in),
  // If true, redirect login page to home_page instead
  useEffect(() => {
    if (session !== null) {
      const setUserContext = async () => {
        const userID = session.user.id
        const userRole = await getUserRole(userID)
        console.log("UserRole: ", userRole)
        console.log("UserID: ", userID)
        setUserID(userID)
        setUserRole(userRole)
      }
      setUserContext()
      console.log(session)
      navigate("/home")
    }
  }, [session, navigate, setUserID, setUserRole])

  // Login handler, when called, takes in the email and password state to the user authenticator,
  // When successful, also change the session to match the user session
  const handleLogin = async () => {
    await handleLoginButtonPressed(formEmail, formPassword, setSession)
  }

  return (
    <div style={containerStyle}>
      {/* Left Panel */}
      <div style={leftPanelStyle}>
        <div style={logoContainerStyle}>
          <img src="/galenalogo.avif" alt="Galena Logo" style={logoStyle} />
        </div>

        <h2 style={headerStyle}>Login into your account</h2>

        {/* Email Input */}
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Email address</label>
          <div style={inputWithIconStyle}>
            <input
              type="email"
              placeholder="example@email.com"
              style={inputStyle}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin()
              }}
              onChange={(e) => {
                setFormEmail(e.target.value) // Everytime the form content changes, set the state to current value
              }}
              required
            />
            <div style={iconBoxStyle}>
              <img src="/email.png" alt="Email Icon" style={iconStyle} />
            </div>
          </div>
        </div>

        {/* Password Input */}
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Password</label>
          <div style={inputWithIconStyle}>
            <input
              type="password"
              placeholder="Enter your password"
              style={inputStyle}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin()
              }}
              onChange={(e) => {
                setFormPassword(e.target.value) // Everytime the form content changes, set the state to current value
              }}
              required
            />
            <div style={iconBoxStyle}>
              <img src="/lock.png" alt="Lock Icon" style={iconStyle} />
            </div>
          </div>
        </div>

        {/* Forgot Password */}
        <div style={forgotPasswordStyle}>
          <a href="#" style={forgotPasswordLinkStyle}>
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button style={loginButtonStyle} onClick={handleLogin}>
          Login now
        </button>

        <div style={dividerContainerStyle}>
          <div style={dividerStyle}></div>
          <span style={orTextStyle}>OR</span>
          <div style={dividerStyle}></div>
        </div>

        {/* Signup Button */}
        <button style={signupButtonStyle}>Signup now</button>
      </div>

      {/* Right Panel */}
      <div style={rightPanelStyle}>
        <img src="/galenalogo.avif" alt="Galena Logo" style={{ width: "15rem" }} />
      </div>
    </div>
  )
}

const containerStyle = {
  display: "flex",
  height: "100vh",
  backgroundColor: "#1e1e1e",
}

const leftPanelStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "33%",
  backgroundColor: "black",
  padding: "2rem",
  borderRadius: "1rem",
}

const logoContainerStyle = {
  marginBottom: "2.5rem",
}

const logoStyle = {
  height: "4rem",
}

const headerStyle = {
  color: "white",
  fontSize: "1rem",
  marginBottom: "1rem",
  fontWeight: "bold",
}

const labelStyle = {
  color: "#FFFFFF",
  fontSize: "1rem",
  marginBottom: "0.5rem",
  display: "block",
}

const inputContainerStyle = {
  width: "100%",
  marginBottom: "1.5rem",
}

const inputWithIconStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "0.75rem",
}

const inputStyle = {
  flex: 1,
  padding: "0.75rem",
  paddingLeft: "1rem",
  borderRadius: "0.75rem",
  color: "black",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
}

const iconBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  backgroundColor: "#D6C271",
  borderRadius: "0.75rem",
}

const iconStyle = {
  height: "1.5rem",
}

const forgotPasswordStyle = {
  width: "100%",
  textAlign: "right",
  marginBottom: "1.5rem",
}

const forgotPasswordLinkStyle = {
  color: "#D6C271",
  fontSize: "0.875rem",
  textDecoration: "underline",
  cursor: "pointer",
}

const loginButtonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#D6C271",
  borderRadius: "0.75rem",
  color: "black",
  fontWeight: "600",
  cursor: "pointer",
  marginBottom: "1.5rem",
}

const dividerContainerStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: "1.5rem",
}

const dividerStyle = {
  flexGrow: 1,
  borderTop: "1px solid #4b5563",
}

const orTextStyle = {
  color: "#9ca3af",
  margin: "0 1rem",
}

const signupButtonStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #D6C271",
  borderRadius: "0.75rem",
  backgroundColor: "black",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
}

const rightPanelStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "67%",
}

const largeLogoStyle = {
  height: "8rem",
}

export default LoginPage
