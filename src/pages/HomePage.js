import React from "react"
import { useSession } from "../context/sessionContext"
import AdminDashboard from "../components/AdminDashboard"
import ManagerDashboard from "../components/ManagerDashboard"
import TenantDashboard from "../components/TenantDashboard"
import NoPage from "./_NoPage"

export const HomePage = () => {
  const { userRole, userID } = useSession()
  console.log("User Session Role: ", userID)
  if (userRole === "ADMIN") {
    return <AdminDashboard />
  }
  if (userRole === "MANAGER") {
    return <ManagerDashboard />
  }
  if (userRole === "USER") {
    return <TenantDashboard />
  } else {
    return <NoPage />
  }
}
