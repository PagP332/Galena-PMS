import React, { useState } from "react"
import { SignOut } from "./SignOut"

const ManagerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard")

  const sectionContent = {
    Dashboard: <DashboardContent setActiveSection={setActiveSection} />,
    Properties: <PropertiesContent />,
    Maintenance: <MaintenanceContent />,
    Financials: <FinancialsContent />,
  }

  const navItems = [
    { label: "Dashboard", icon: "./DashboardIcon.png" },
    { label: "Properties", icon: "./PropertiesIcon.png" },
    { label: "Maintenance", icon: "./MainteRequest.png" },
    { label: "Financials", icon: "./FinancialOverview.png" },
  ]

  return (
    <div style={{ height: "100vh", fontFamily: "Calibri, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#D6C271",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        <span>Manager</span>
        <div style={{ fontSize: "1rem" }}>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Profile & Settings</span>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Notifications</span>
          <SignOut style={{ marginRight: "20px" }} />
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: "18rem", backgroundColor: "white", padding: "1rem", borderRight: "2px solid #D6C271" }}>
          <div style={{ textAlign: "left", marginBottom: "2rem" }}>
            <img src="/galenalogo.avif" alt="Galena Logo" style={{ width: "8rem" }} />
          </div>
          <nav>
            {navItems.map((item) => (
              <div
                key={item.label}
                onClick={() => setActiveSection(item.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: activeSection === item.label ? "#D6C271" : "transparent",
                  color: activeSection === item.label ? "black" : "#333",
                  marginBottom: "12px",
                  fontSize: "1rem",
                }}
              >
                <img src={item.icon} alt={item.label} style={{ width: "26px", marginRight: "12px" }} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>
        <div style={{ flex: 1, padding: "30px", backgroundColor: "black", color: "white" }}>{sectionContent[activeSection]}</div>
      </div>
    </div>
  )
}

{
  /*==================================================================*/
}

// Dashboard Content
const DashboardContent = () => {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1 style={{ fontSize: "2rem", color: "#D6C271", marginBottom: "10px", lineHeight: "1.2" }}>
        Welcome to Your Property
        <br />
        Manager Interface
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "20px", lineHeight: "1.2" }}>Stay organized and manage your properties efficiently</p>
      <button style={{ padding: "10px 20px", fontSize: "1rem", borderRadius: "5px", border: "none", cursor: "pointer" }}>View Dashboard</button>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem", color: "#D6C271", marginBottom: "20px" }}>Dashboard Overview</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <DashboardCard
            imageSrc="./PendingMaintenance.png"
            title="Pending Maintenance Request"
            description="View and prioritize urgent maintenance tasks"
          />
          <DashboardCard imageSrc="./IoT.png" title="Live IoT Device Status" description="Monitor HVAC, security, and smart locks in real-time" />
          <DashboardCard
            imageSrc="./UpcomingPayment.png"
            title="Upcoming Payments & Expenses"
            description="Stay updated on rent collections and due dates"
          />
          <DashboardCard
            imageSrc="./RecentTenantReq.png"
            title="Recent Tenant Request"
            description="Keep track of logged tenant issues and responses"
          />
        </div>
      </div>
    </div>
  )
}

// Dashboard Card Component
const DashboardCard = ({ imageSrc, title, description }) => {
  return (
    <div
      style={{
        width: "350px",
        backgroundColor: "#222",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        transition: "transform 0.2s",
        cursor: "pointer",
        textAlign: "left",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={imageSrc} alt={title} style={{ width: "50px", height: "50px", marginRight: "15px" }} />
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "1.2rem", color: "#D6C271", lineHeight: "1.2" }}>{title}</h3>
        <p style={{ fontSize: "0.9rem", color: "white", lineHeight: "1.2" }}>{description}</p>
      </div>
    </div>
  )
}

{
  /*==================================================================*/
}

const PropertiesContent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>Property Locations</h1>

      {/*Map kuno WHAHAHAH*/}
      <div
        style={{
          backgroundColor: "#333",
          width: "100%",
          height: "200px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <p>hehe sorry guys eto muna XD</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <PropertyCard image="/BGC.png" location="BGC, Taguig" />
        <PropertyCard image="/Makati.png" location="Makati CBD" />
        <PropertyCard image="/LaUnion.png" location="La Union (San Juan)" />
        <PropertyCard image="/Mactan.png" location="Mactan, Cebu City" />
      </div>
    </div>
  )
}

// Property Card Component
const PropertyCard = ({ image, location, link }) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      style={{
        width: "200px",
        textAlign: "center",
        backgroundColor: "#222",
        padding: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={image} alt={location} style={{ width: "100%", borderRadius: "5px" }} />
      <p style={{ color: "white", marginTop: "10px" }}>{location}</p>
    </div>
  )
}

{
  /*==================================================================*/
}

const MaintenanceContent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#D6C271", fontSize: "2rem", marginBottom: "20px" }}>Latest Maintenance Requests</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <MaintenanceCard title="Repair HVAC System" priority="Urgent" status="Pending" />
        <MaintenanceCard title="Fix Security Camera" priority="Medium Priority" status="In Progress" />
        <MaintenanceCard title="Light Bulb Replacement" priority="Low Priority" status="Pending" />
      </div>
    </div>
  )
}

const MaintenanceCard = ({ title, priority, status, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "black",
        borderRadius: "10px",
        width: "250px",
        cursor: "pointer",
      }}
    >
      <img src="./Tool.png" alt="Tool Icon" style={{ width: "50px", marginBottom: "10px" }} />
      <h3 style={{ color: "#D6C271", fontSize: "1.2rem", marginBottom: "5px" }}>{title}</h3>
      <p style={{ color: "rgba(214, 194, 113, 0.5)", fontSize: "1rem", marginBottom: "10px" }}>{priority}</p>
      <p style={{ color: "#D6C271", fontWeight: "bold", fontSize: "1.1rem" }}>{status}</p>
    </div>
  )
}

{
  /*==================================================================*/
}

const FinancialsContent = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "#D6C271" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>Financial Overview</h1>
      <p style={{ fontSize: "1rem", color: "rgba(214, 194, 113, 0.7)" }}>Track rent collection and expenses</p>

      {/*Rent Collected and Expenses */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <div style={boxStyle}>
          <p style={boxTitleStyle}>Total Rent Collected</p>
          <h2 style={boxAmountStyle}>$10,500</h2>
          <p style={boxChangeStyle}>+5%</p>
        </div>

        <div style={boxStyle}>
          <p style={boxTitleStyle}>Expenses</p>
          <h2 style={boxAmountStyle}>$3,200</h2>
          <p style={boxChangeStyle}>-2%</p>
        </div>

        <div style={boxStyle}>
          <p style={boxTitleStyle}>Outstanding Payments</p>
          <h2 style={boxAmountStyle}>$1,500</h2>
          <p style={boxChangeStyle}>+10%</p>
        </div>
      </div>

      {/* Financial Trends (For graph)*/}
      <div style={trendsGridStyle}>
        <h3 style={{ color: "#D6C271", textAlign: "left", padding: "10px" }}>Financial Trends</h3>
        <div style={gridLinesStyle}></div>
      </div>
    </div>
  )
}

const boxStyle = {
  backgroundColor: "black",
  border: "1px solid rgba(214, 194, 113, 0.5)",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
}

const boxTitleStyle = { fontSize: "1rem", color: "rgba(214, 194, 113, 0.8)" }
const boxAmountStyle = { fontSize: "1.5rem", fontWeight: "bold", color: "#D6C271" }
const boxChangeStyle = { fontSize: "1rem", color: "rgba(214, 194, 113, 0.6)" }

const trendsGridStyle = {
  backgroundColor: "black",
  border: "1px solid rgba(214, 194, 113, 0.5)",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
}

const gridLinesStyle = {
  height: "200px",
  backgroundImage: "linear-gradient(rgba(214, 194, 113, 0.2) 1px, transparent 1px)",
  backgroundSize: "100% 40px",
}

export default ManagerDashboard
