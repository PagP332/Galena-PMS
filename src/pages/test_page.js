import React, { useState } from "react"
import { testFetch, testUpdate } from "./../api/tests"
import { useSession } from "../context/sessionContext"
import { useNavigate } from "react-router-dom"

export default function Test() {
  const [data, setData] = useState("")
  const [formValue, setFormValue] = useState("")
  const navigate = useNavigate()
  const { session } = useSession()
  return (
    <div style={containerStyle}>
      <p style={{ color: "white" }}>{data}</p>
      <button
        style={button}
        onClick={() => {
          setData(testFetch())
          console.log(session)
        }}
      >
        Test Fetch
      </button>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)}></input>
      <button style={button} onClick={() => testUpdate(formValue)}>
        Test Update
      </button>
      <button style={button} onClick={() => navigate("/test_home")}>
        Go back to home
      </button>
    </div>
  )
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#1e1e1e",
}
const button = {
  margin: 2,
  width: "20%",
  height: "5%",
}
