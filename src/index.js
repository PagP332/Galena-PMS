import React from "react"
import ReactDOM from "react-dom/client"
import LoginPage from "./LoginPage"
import Test from "./test_page"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <LoginPage /> */}
    <Test />
  </React.StrictMode>
)
