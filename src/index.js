import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SessionProvider } from "./constants/sessionContext"
import LoginPage from "./pages/LoginPage"
import TestHome from "./pages/test_home"
import Test from "./pages/test_page"
import NoPage from "./pages/_NoPage"

const root = ReactDOM.createRoot(document.getElementById("root"))

// SessionProvider is for the user session context, can be accessed anywhere within the the children of the whole app
// Used by declaring { session, setSession } = useSession()
// SessionProvider component can be found withint the /constants/ folder
root.render(
  <React.StrictMode>
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="test" element={<Test />} />
          <Route path="test_home" element={<TestHome />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  </React.StrictMode>
)
