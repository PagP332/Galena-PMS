import React from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { SignOutButton } from "./SignOutButton"

const Layout = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={layoutContainer}>
      {/* Top Header */}
      <div style={topBarStyle}>
        <span>Welcome Tenant!</span>
        <div style={{ fontSize: "1rem" }}>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Profile & Settings</span>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Notifications</span>
          <SignOutButton style={{ marginRight: "20px" }} />
        </div>
      </div>

      {/* Main Layout */}
      <div style={contentWrapper}>
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <nav style={navStyle}>
            <NavItem icon="/assets/DashboardIcon.png" label="Home" path="/" navigate={navigate} location={location} />
            <NavItem icon="/assets/MeterReadings.png" label="My Utilities" path="/t/utilities" navigate={navigate} location={location} />
            <NavItem icon="/assets/FinancialsIcon.png" label="Billing" path="/t/billing" navigate={navigate} location={location} />
            <NavItem icon="/assets/MaintenanceIcon.png" label="Maintenance Requests" path="/t/maintenance" navigate={navigate} location={location} />
          </nav>
        </div>

        {/* Content */}
        <div style={contentContainer}>
          {children} {/* Renders the current page */}
        </div>
      </div>
    </div>
  )
}

// Navigation Item Component with Active State Highlight
const NavItem = ({ icon, label, path, navigate, location }) => {
  const isActive = location.pathname === path

  return (
    <div
      style={{
        ...navItemStyle,
        ...(isActive ? activeNavItemStyle : {}), // Apply active style if the route matches
      }}
      onClick={() => navigate(path)}
    >
      <img src={icon} alt={label} style={iconStyle} />
      <span style={labelStyle}>{label}</span>
    </div>
  )
}

// Styles
const layoutContainer = { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }

// **Updated Header**
const topBarStyle = {
  backgroundColor: "#D6C271",
  padding: "20px 30px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.2rem",
  fontWeight: "bold",
}

const headerTitle = { fontSize: "1.5rem", fontWeight: "bold", color: "#000", flexGrow: 1 }

// Top Right Menu
const topRightMenu = { display: "flex", gap: "1.5rem", marginRight: "2rem" }
const topRightItem = { cursor: "pointer", whiteSpace: "nowrap", color: "#000" }

// Wrapper for sidebar and content
const contentWrapper = { display: "flex", flex: 1, overflow: "hidden" }

// **Sidebar with white background**
const sidebarStyle = {
  width: "250px",
  backgroundColor: "#FFFFFF", // White sidebar
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  borderRight: "2px solid #B59837",
}

// Navigation Styles
const navStyle = { display: "flex", flexDirection: "column", gap: "1rem" }

const navItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0.75rem",
  cursor: "pointer",
  transition: "background 0.3s",
  borderRadius: "8px", // Rounded edges
}

// **Active Item Style (Box Highlight)**
const activeNavItemStyle = {
  backgroundColor: "#B59837", // Gold highlight
  color: "#FFFFFF",
  fontWeight: "bold",
}

// Navigation Icon
const iconStyle = { width: "24px", height: "24px" }

// Navigation Text Label
const labelStyle = { fontSize: "1rem", color: "#3B3B3B" }

// Content Area
const contentContainer = {
  flex: 1,
  backgroundColor: "#000",
  color: "white",
  padding: "1rem",
  overflow: "auto",
}

export default Layout
