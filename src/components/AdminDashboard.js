import React, { useState } from "react"
import { SignOut } from "./SignOut"

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard")

  const sectionContent = {
    Dashboard: <DashboardContent setActiveSection={setActiveSection} />,
    Properties: <PropertiesContent />,
    Maintenance: <MaintenanceContent />,
    Financials: <FinancialsContent />,
    "Report & Analytics": <ReportsAnalyticsContent />,

    "Total Properties Managed": <h2>Total Properties Managed Content</h2>,
    "IoT Devices Status": <h2>IoT Devices Status Content</h2>,
    "Recent Alerts & Notifications": <h2>Recent Alerts & Notifications Content</h2>,
    "Meter Readings": <h2>Meter Readings Content</h2>,
  }

  const navItems = [
    { label: "Dashboard", icon: "/DashboardIcon.png" },
    { label: "Properties", icon: "/PropertiesIcon.png" },
    { label: "Maintenance", icon: "/MaintenanceIcon.png" },
    { label: "Financials", icon: "/FinancialsIcon.png" },
    { label: "Report & Analytics", icon: "/ReportsIcon.png" },
  ]

  return (
    <div style={{ height: "100vh", fontFamily: "Calibri, sans-serif", display: "flex", flexDirection: "column" }}>
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
        <span>Administrator</span>
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
const DashboardContent = ({ setActiveSection }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#D6C271", fontSize: "2rem" }}>Welcome to Your Administrator Interface</h1>
      <p>Stay organized and manage your properties efficiently</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <DashboardIcon image="./TPM.png" label="Total Properties Managed" onClick={() => setActiveSection("Total Properties Managed")} />
        <DashboardIcon image="./IoT.png" label="IoT Devices Status" onClick={() => setActiveSection("IoT Devices Status")} />
        <DashboardIcon image="./Notif.png" label="Recent Alerts & Notifications" onClick={() => setActiveSection("Recent Alerts & Notifications")} />
        <DashboardIcon image="./MeterReadings.png" label="Meter Readings" onClick={() => setActiveSection("Meter Readings")} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
        <GraphCard title="Occupancy Rate" />
        <GraphCard title="Energy Usage" />
        <GraphCard title="IoT Status" />
      </div>
    </div>
  )
}

const DashboardIcon = ({ image, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "160px",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <img src={image} alt={label} style={{ width: "80px", marginBottom: "12px", display: "block", margin: "0 auto" }} />
      <p style={{ color: "white", fontSize: "1rem", marginTop: "12px" }}>{label}</p>
    </div>
  )
}

// Graph Card Component
const GraphCard = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <h3 style={{ color: "#D6C271", fontSize: "1rem", textAlign: "center" }}>{title}</h3>

      {/* Graph Axes (Fake hehe) */}
      <div
        style={{
          flex: 1,
          borderLeft: "2px solid white",
          borderBottom: "2px solid white",
          position: "relative",
          margin: "10px 10px 0 10px",
        }}
      >
        {/* Usage/Rate label */}
        <span
          style={{
            position: "absolute",
            left: "-30px",
            top: "40%",
            color: "white",
            fontSize: "0.8rem",
            transform: "rotate(-90deg)",
          }}
        >
          {title.includes("Usage") ? "Usage" : "Rate"}
        </span>

        {/* Time label */}
        <span
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "40%",
            color: "white",
            fontSize: "0.8rem",
          }}
        >
          Time
        </span>
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

      {/* Rent Collected and Expenses */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <div style={boxStyle}>
          <p style={boxTitleStyle}>Rent Collected</p>
          <h2 style={boxAmountStyle}>$25,000</h2>
          <p style={boxChangeStyle}>+5%</p>
        </div>

        <div style={boxStyle}>
          <p style={boxTitleStyle}>Expenses</p>
          <h2 style={boxAmountStyle}>$8,000</h2>
          <p style={boxChangeStyle}>-10%</p>
        </div>
      </div>

      {/* Financial Trends (For graph)*/}
      <div style={trendsGridStyle}>
        <h3 style={{ color: "#D6C271", textAlign: "left", padding: "10px" }}>Financial Trends</h3>
        <div style={gridLinesStyle}></div> {/* Empty Grid */}
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

{
  /*==================================================================*/
}

const ReportsAnalyticsContent = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Automated Reports</h1>
      <p style={subtitleStyle}>Generate reports in PDF or CSV format</p>
      <div style={inputContainerStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Report Type</label>
          <input type="text" style={inputStyle} />
          <p style={placeholderStyle}>PDF or CSV</p>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Frequency</label>
          <input type="text" style={inputStyle} />
          <p style={placeholderStyle}>Weekly, Monthly, etc.</p>
        </div>
      </div>

      <button style={buttonStyle}>Generate Report</button>
      <div style={insightContainerStyle}>
        <p>AI-powered Energy Insights for cost-saving strategies</p>
      </div>
      <footer style={footerStyle}>
        <p style={leftFooterStyle}>© 2023 Admin Dashboard. All rights reserved.</p>
        <p style={rightFooterStyle}>Contact: admin@dashboard.com</p>
      </footer>
    </div>
  )
}

const containerStyle = {
  textAlign: "center",
  padding: "20px",
  color: "#D6C271",
}

const titleStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
}

const subtitleStyle = {
  fontSize: "1rem",
  marginBottom: "20px",
  color: "rgba(214, 194, 113, 0.7)",
}

const inputContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "20px",
}

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const labelStyle = {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#FFFFFF",
  marginBottom: "5px",
}

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid rgba(214, 194, 113, 0.5)",
  width: "350px",
  backgroundColor: "white",
}

const placeholderStyle = {
  fontSize: "0.9rem",
  color: "gray",
  marginTop: "5px",
}

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  marginBottom: "40px",
}

const insightContainerStyle = {
  backgroundColor: "#5A4F23",
  padding: "50px",
  borderRadius: "10px",
  margin: "40px auto",
  width: "80%",
  color: "white",
}

const footerStyle = { display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "gray" }

const leftFooterStyle = {
  textAlign: "left",
}

const rightFooterStyle = {
  textAlign: "right",
}

export default AdminDashboard
