import React, { useState } from "react"
import { testFetch, testUpdate } from "./../api/tests"
import { useSession } from "../constants/sessionContext"

export default function Test() {
  const [data, setData] = useState("")
  const [formValue, setFormValue] = useState("")
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
  width: "20%",
  height: "5%",
}
