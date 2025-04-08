import React from "react"

export default function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/galenalogo.avif" alt="Galena Logo" style={{ width: "50%", height: "50%" }} />
    </div>
  )
}
