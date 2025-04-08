import React from "react"
import { useSession } from "../context/sessionContext"
import AdminDashboard from "../components/AdminDashboard"
import ManagerDashboard from "../components/ManagerDashboard"
import TenantDashboard from "../components/TenantDashboard"
import NoPage from "./_NoPage"

export const HomePage = () => {
  const { userRole, userID } = useSession()
  try {
    console.log("User ID: ", userID)
    console.log("User Role: ", userRole)
    if (userRole === "ADMIN") {
      return <AdminDashboard />
    }
    if (userRole === "MANAGER") {
      return <ManagerDashboard />
    } else {
      return <TenantDashboard />
    }
  } catch (e) {
    console.log("Error: ", e)
    return <NoPage />
  }
}
