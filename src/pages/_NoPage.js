import React from "react"

// Default page redirect if ever the page does not exist
export default function NoPage() {
  return (
    <div style={{ flex: 1, padding: 200 }}>
      <img src="/galenalogo.avif" alt="Galena Logo" style={{ width: "50", height: "50" }} />
      <h1 style={{ fontWeight: "bold" }}>Error 404: </h1>
      <h3>I'm sorry, this page does not exist!</h3>
    </div>
  )
}
