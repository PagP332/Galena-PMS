import React, { Suspense, Component } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { SessionProvider, useSession } from "./context/sessionContext"
import LoginPage from "./pages/LoginPage"
import TestHome from "./pages/test_home"
import Test from "./pages/test_page"
import NoPage from "./pages/_NoPage"
import { HomePage } from "./pages/HomePage"
import { SignOut } from "./pages/_SignOut"
import TestDashboard from "./components/TestDashboard"
import MyUtilities from "./components/MyUtilities"
import MaintenanceRequests from "./components/MaintenanceRequests"
import Billing from "./components/Billing"
import "./fonts.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

// SessionProvider is for the user session context, can be accessed anywhere within the the children of the whole app
// Used by declaring { session, setSession } = useSession()
// SessionProvider component can be found withint the /constants/ folder
const PrivateRoutes = ({ children }) => {
  const { session } = useSession()
  return !session ? <Navigate to="/" /> : children
}

root.render(
  <React.StrictMode>
    <SessionProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <PrivateRoutes>
                  <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="signout" element={<SignOut />} />
                    <Route path="t/utilities" element={<MyUtilities />} />
                    <Route path="t/billing" element={<Billing />} />
                    <Route path="t/maintenance" element={<MaintenanceRequests />} />
                    <Route path="test" element={<Test />} />
                    <Route path="test/home" element={<TestHome />} />
                    <Route path="test/dashboard" element={<TestDashboard />} />
                    <Route path="*" element={<NoPage />} />
                  </Routes>
                </PrivateRoutes>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </SessionProvider>
  </React.StrictMode>
)
