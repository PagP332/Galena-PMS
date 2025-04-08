import React, { useEffect, useState } from "react"
import Loading from "./Loading"

const TenantDashboard = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }
  return <h1>Welcome Tenant</h1>
}

export default TenantDashboard
