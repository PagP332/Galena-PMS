import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SessionProvider } from "./context/sessionContext"
import LoginPage from "./pages/LoginPage"
import TestHome from "./pages/test_home"
import Test from "./pages/test_page"
import NoPage from "./pages/_NoPage"
import { HomePage } from "./pages/HomePage"
import { SignOut } from "./pages/_SignOut"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

// SessionProvider is for the user session context, can be accessed anywhere within the the children of the whole app
// Used by declaring { session, setSession } = useSession()
// SessionProvider component can be found withint the /constants/ folder
root.render(
  <React.StrictMode>
    <SessionProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="test" element={<Test />} />
            <Route path="test_home" element={<TestHome />} />
            <Route path="home" element={<HomePage />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </SessionProvider>
  </React.StrictMode>
)
