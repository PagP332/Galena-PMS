import React, { useState, useEffect } from "react"
import { SignOutButton } from "./SignOutButton"
import Loading from "./Loading"

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard")
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

  const sectionContent = {
    Dashboard: <DashboardContent setActiveSection={setActiveSection} />,
    Properties: <PropertiesContent />,
    Maintenance: <MaintenanceContent />,
    Financials: <FinancialsContent />,
    "Report & Analytics": <ReportsAnalyticsContent />,

    "Total Properties Managed": <TotalPropertiesManaged />,
    "IoT Devices Status": <IoTDevicesStatus />,
    "Recent Alerts & Notifications": <RecentAlertsNotifications />,
    "Meter Readings": <MeterReadings />,
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
          <SignOutButton style={{ marginRight: "20px" }} />
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

const TotalPropertiesManaged = () => {
  const [location, setLocation] = useState("")
  const [property, setProperty] = useState("")
  const [properties, setProperties] = useState([])
  const [showModal, setShowModal] = useState(false)

  const propertyOptions = {
    "BGC, Taguig": [
      { name: "mySTAY Hotel BGC North", address: "Bonifacio Global City (BGC) / Taguig, Manila - 1.2 km to center" },
      { name: "Mytown New York", address: "Bonifacio Global City (BGC) / Taguig, Manila - 0.3 km to center" },
      { name: "Shangri-La Residences The Fort, Manila", address: "Bonifacio Global City (BGC) / Taguig, Manila - City center" },
      { name: "Sefa Bonifacio Global City", address: "Bonifacio Global City (BGC) / Taguig, Manila - 0.6 km to center" },
    ],
    "Makati CBD": [
      { name: "One Pacific Place Serviced Residences", address: "Makati, Manila - City center" },
      { name: "St Giles Makati - A St Giles Hotel, Manila", address: "Makati, Manila - City center" },
      { name: "The Mini Suites at Eton Tower Makati", address: "Makati, Manila - City center" },
      { name: "Prince Plaza ll Condotel", address: "Makati, Manila - City center" },
    ],
    "La Union (San Juan)": [
      { name: "Villas Buenavista", address: "San Juan, La Union" },
      { name: "EL Navi Surftown", address: "San Juan, La Union" },
      { name: "Aureo Resort La Union", address: "San Fernando, La Union" },
      { name: "La Zarene Suites", address: "Bacnotan, La Union" },
    ],
    "Mactan, Cebu City": [
      { name: "Belmont Hotel Mactan", address: "Mactan Island, Cebu - 12.8 km to center" },
      { name: "Travelbee Airport Inn", address: "Mactan Island, Cebu - 7.3 km to center" },
      { name: "Sotogrande Hotel & Resort", address: "Mactan Island, Cebu - 10.9 km to center" },
      { name: "Island Stay Hotels - Mactan", address: "Mactan Island, Cebu - 7.1 km to center" },
    ],
  }

  const addProperty = () => {
    const selected = propertyOptions[location]?.find((p) => p.name === property)
    if (selected) {
      setProperties((prev) => [
        ...prev,
        {
          name: selected.name,
          address: selected.address,
          units: 3,
          occupancyRate: "50%",
          status: "Active",
          manager: "John Doe",
        },
      ])
      setLocation("")
      setProperty("")
      setShowModal(false)
    }
  }

  const removeProperty = (index) => {
    const copy = [...properties]
    copy.splice(index, 1)
    setProperties(copy)
  }

  const total = properties.length
  const occupied = total * 3 * 0.5
  const vacant = total * 3 * 0.5
  const pending = 2

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <SummaryBox label="Total Properties" value={total} />
        <SummaryBox label="Occupied Units" value={occupied} />
        <SummaryBox label="Vacant Units" value={vacant} />
        <SummaryBox label="Pending Maintenance" value={pending} />
        <SummaryBox label="Add Property" value="+" onClick={() => setShowModal(true)} />
      </div>

      <div style={{ display: "flex", fontWeight: "bold", borderBottom: "1px solid #D6C271", padding: "10px 0", color: "#D6C271" }}>
        <div style={{ flex: 2 }}>Property Name</div>
        <div style={{ flex: 3 }}>Address</div>
        <div style={{ flex: 1 }}>Units</div>
        <div style={{ flex: 1 }}>Occupancy Rate</div>
        <div style={{ flex: 1 }}>Status</div>
        <div style={{ flex: 1 }}>Manager</div>
        <div style={{ flex: 1 }}>Remove</div>
      </div>

      {properties.map((p, i) => (
        <div key={i} style={{ display: "flex", padding: "12px 0", borderBottom: "1px solid #999", color: "white" }}>
          <div style={{ flex: 2 }}>{p.name}</div>
          <div style={{ flex: 3 }}>{p.address}</div>
          <div style={{ flex: 1 }}>{p.units}</div>
          <div style={{ flex: 1 }}>{p.occupancyRate}</div>
          <div style={{ flex: 1, color: "lime" }}>{p.status} ●</div>
          <div style={{ flex: 1 }}>{p.manager}</div>
          <div style={{ flex: 1, color: "red", fontWeight: "bold", cursor: "pointer" }} onClick={() => removeProperty(i)}>
            ⛔
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              color: "white",
            }}
          >
            <h3>Add New Property</h3>
            <div style={{ marginBottom: "10px" }}>
              <label>Location:</label>
              <br />
              <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: "100%" }}>
                <option value="">Select Location</option>
                {Object.keys(propertyOptions).map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Property Name:</label>
              <br />
              <select value={property} onChange={(e) => setProperty(e.target.value)} style={{ width: "100%" }} disabled={!location}>
                <option value="">Select Property</option>
                {location &&
                  propertyOptions[location].map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowModal(false)} style={{ padding: "6px 12px" }}>
                Cancel
              </button>
              <button onClick={addProperty} style={{ padding: "6px 12px", backgroundColor: "#F7D774", color: "#000", border: "none" }}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const SummaryBox = ({ label, value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "black",
        border: "2px solid #D6C271",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#D6C271",
        fontWeight: "bold",
        fontSize: "1.2rem",
        cursor: onClick ? "pointer" : "default",
        textAlign: "center",
      }}
    >
      <div>{value}</div>
      <div style={{ fontSize: "0.7rem", color: "white", marginTop: "6px" }}>{label}</div>
    </div>
  )
}

const IoTDevicesStatus = () => {
  const [showModal, setShowModal] = useState(false)
  const devices = [
    {
      id: "001",
      name: "AC Controller",
      type: "HVAC",
      property: "mySTAY Hotel BGC North",
      location: "Living Room",
      status: "Online",
      battery: "85%",
      temp: "22 °C",
      humidity: "55%",
      alerts: "None",
    },
    {
      id: "002",
      name: "Smart Lock",
      type: "Security",
      property: "mySTAY Hotel BGC North",
      location: "Main door",
      status: "Online",
      battery: "85%",
      temp: "22 °C",
      humidity: "55%",
      alerts: "None",
    },
    {
      id: "003",
      name: "Water Meter",
      type: "Utility",
      property: "mySTAY Hotel BGC North",
      location: "Basement",
      status: "Online",
      battery: "85%",
      temp: "22 °C",
      humidity: "55%",
      alerts: "None",
    },
    {
      id: "004",
      name: "Gas Sensor",
      type: "Safety",
      property: "mySTAY Hotel BGC North",
      location: "Kitchen",
      status: "Online",
      battery: "85%",
      temp: "22 °C",
      humidity: "55%",
      alerts: "None",
    },
  ]

  const handleAddDeviceClick = () => {
    setShowModal(true)
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <SummaryBox label="Total Devices" value="35" />
        <SummaryBox label="Active Devices" value="15" />
        <SummaryBox label="Offline Devices" value="2" />
        <SummaryBox label="Add Device" value="+" onClick={handleAddDeviceClick} />
      </div>

      <div
        style={{ display: "flex", fontWeight: "bold", borderBottom: "1px solid #D6C271", padding: "10px 0", color: "#D6C271", fontSize: "0.9rem" }}
      >
        <div style={{ flex: 1 }}>Device ID</div>
        <div style={{ flex: 2 }}>Device Name</div>
        <div style={{ flex: 2 }}>Device Type</div>
        <div style={{ flex: 2 }}>Property</div>
        <div style={{ flex: 2 }}>Location (Room/Area)</div>
        <div style={{ flex: 2 }}>Status</div>
        <div style={{ flex: 2 }}>Sensor Data</div>
        <div style={{ flex: 2 }}>Alerts/Issues</div>
        <div style={{ flex: 1 }}>Actions</div>
      </div>

      {devices.map((device, index) => (
        <div key={index} style={{ display: "flex", padding: "12px 0", borderBottom: "1px solid #999", color: "white", fontSize: "0.9rem" }}>
          <div style={{ flex: 1 }}>{device.id}</div>
          <div style={{ flex: 2 }}>{device.name}</div>
          <div style={{ flex: 2 }}>{device.type}</div>
          <div style={{ flex: 2 }}>{device.property}</div>
          <div style={{ flex: 2 }}>{device.location}</div>
          <div style={{ flex: 2 }}>
            <div style={{ color: "lime" }}>● {device.status}</div>
            <div style={{ fontSize: "0.8rem", color: "#aaa" }}>10 mins ago</div>
            <div style={{ fontSize: "0.8rem", color: "#D6C271" }}>🔋 {device.battery}</div>
          </div>
          <div style={{ flex: 2 }}>
            Temp: {device.temp}
            <br />
            Humidity: {device.humidity}
          </div>
          <div style={{ flex: 2 }}>{device.alerts}</div>
          <div style={{ flex: 1 }}>
            <span style={{ color: "red", cursor: "pointer", marginRight: "10px" }}>⛔</span>
            <span style={{ cursor: "pointer" }}>⚙️</span>
            <span style={{ color: "lime", cursor: "pointer", marginLeft: "10px" }}>↻</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const RecentAlertsNotifications = () => {
  const alerts = [
    {
      timestamp: "12:45 PM 4/1/2025",
      type: "Fire Alarm",
      icon: "🔥",
      property: "mySTAY Hotel BGC North",
      severity: "Critical",
      severityColor: "red",
      status: "Unresolved",
      statusIcon: "🛑",
      statusColor: "red",
    },
    {
      timestamp: "1:38 PM 4/3/2025",
      type: "Unauthorized Entry",
      icon: "⛔",
      property: "mySTAY Hotel BGC North",
      severity: "Warning",
      severityColor: "orange",
      status: "Reviewing",
      statusIcon: "📝",
      statusColor: "orange",
    },
    {
      timestamp: "12:45 PM 4/4/2025",
      type: "High Energy Use",
      icon: "⚡",
      property: "mySTAY Hotel BGC North",
      severity: "Medium",
      severityColor: "yellow",
      status: "Resolved",
      statusIcon: "✅",
      statusColor: "lime",
    },
  ]

  return (
    <div>
      <h2 style={{ color: "#D6C271", marginBottom: "20px" }}>Recent Alerts & Notifications</h2>

      {/* Header Row */}
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          borderBottom: "1px solid #D6C271",
          padding: "10px 0",
          color: "#D6C271",
        }}
      >
        <div style={{ flex: 2 }}>Timestamp</div>
        <div style={{ flex: 2 }}>Alert Type</div>
        <div style={{ flex: 3 }}>Property</div>
        <div style={{ flex: 1 }}>Severity</div>
        <div style={{ flex: 1 }}>Status</div>
      </div>

      {/* Alert Rows */}
      {alerts.map((alert, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            padding: "12px 0",
            borderBottom: "1px solid #999",
            color: "white",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 2 }}>{alert.timestamp}</div>
          <div style={{ flex: 2 }}>
            <span style={{ marginRight: "6px" }}>{alert.icon}</span>
            {alert.type}
          </div>
          <div style={{ flex: 3 }}>{alert.property}</div>
          <div style={{ flex: 1, color: alert.severityColor }}>● {alert.severity}</div>
          <div style={{ flex: 1, color: alert.statusColor }}>
            {alert.statusIcon} {alert.status}
          </div>
        </div>
      ))}
    </div>
  )
}

const MeterReadings = () => {
  const summary = {
    totalReadings: 100,
    avgElectricity: "500 kWh",
    avgWater: "1,200 L",
    gasEvents: "5 events this week",
  }

  const readings = Array.from({ length: 9 }, () => [
    {
      type: "Electricity",
      current: "520 kWh",
      last: "500 kWh",
      trend: "↑+4%",
      trendColor: "lime",
    },
    {
      type: "Water",
      current: "1250 L",
      last: "1200 L",
      trend: "↓-2%",
      trendColor: "red",
    },
    {
      type: "Gas Sensor",
      current: "2 events detected",
      last: "1 event",
      trend: "⚠️ Increased Activity",
      trendColor: "orange",
    },
  ]).flat()

  return (
    <div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <SummaryBox label="Total Readings Logged" value={summary.totalReadings} />
        <SummaryBox label="Avg. Electricity Usage" value={summary.avgElectricity} />
        <SummaryBox label="Avg. Water Usage" value={summary.avgWater} />
        <SummaryBox label="Gas Sensor Detected Events" value={summary.gasEvents} />
      </div>

      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          borderBottom: "1px solid #D6C271",
          padding: "10px 0",
          color: "#D6C271",
        }}
      >
        <div style={{ flex: 3 }}>Property</div>
        <div style={{ flex: 2 }}>Meter Type</div>
        <div style={{ flex: 2 }}>Current Reading</div>
        <div style={{ flex: 2 }}>Last Reading</div>
        <div style={{ flex: 2 }}>Trend / Status</div>
      </div>

      {readings.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            padding: "12px 0",
            borderBottom: "1px solid #999",
            color: "white",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 3 }}>mySTAY Hotel BGC North</div>
          <div style={{ flex: 2 }}>{r.type}</div>
          <div style={{ flex: 2 }}>{r.current}</div>
          <div style={{ flex: 2 }}>{r.last}</div>
          <div style={{ flex: 2, color: r.trendColor }}>{r.trend}</div>
        </div>
      ))}
    </div>
  )
}

{
  /*==================================================================*/
}

const PropertiesContent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const locationProperties = {
    "BGC, Taguig": bgcProperties,
    "Makati CBD": makatiProperties,
    "La Union (San Juan)": laUnionProperties,
    Mactan: MactanProperties,
  }

  return (
    <div style={{ textAlign: "center" }}>
      {selectedLocation ? (
        <PropertiesView location={selectedLocation} properties={locationProperties[selectedLocation]} />
      ) : (
        <>
          <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "20px" }}>Property Locations</h1>

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
            <PropertyCard image="/BGC.png" location="BGC, Taguig" onClick={() => setSelectedLocation("BGC, Taguig")} />
            <PropertyCard image="/Makati.png" location="Makati CBD" onClick={() => setSelectedLocation("Makati CBD")} />
            <PropertyCard image="/LaUnion.png" location="La Union (San Juan)" onClick={() => setSelectedLocation("La Union (San Juan)")} />
            <PropertyCard image="/Mactan.png" location="Mactan, Cebu City" onClick={() => setSelectedLocation("Mactan")} />
          </div>
        </>
      )}
    </div>
  )
}

const PropertyCard = ({ image, location, onClick }) => {
  return (
    <div
      onClick={onClick}
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

const PropertiesView = ({ location, properties, onBack }) => {
  const [modalImages, setModalImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (images, index = 0) => {
    setModalImages(images)
    setCurrentIndex(index)
  }

  const closeModal = () => setModalImages([])
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1))
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % modalImages.length)

  return (
    <div>
      <h2 style={{ color: "white", textAlign: "left", margin: "20px 0" }}>{location}</h2>
      {properties.map((prop, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#222",
            padding: "15px",
            marginBottom: "30px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <div>
              <img
                src={prop.images[0]}
                alt={prop.name}
                style={{ width: "250px", height: "160px", objectFit: "cover", borderRadius: "5px", cursor: "pointer" }}
                onClick={() => openModal(prop.images)}
              />
              <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                {prop.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => openModal(prop.images, i + 1)}
                  />
                ))}
              </div>
            </div>

            <div style={{ color: "white", textAlign: "left", flexGrow: 1, position: "relative" }}>
              <h2 style={{ margin: "0 0 5px 0" }}>{prop.name}</h2>
              <img src="/stars.png" alt="stars" style={{ height: "16px", marginBottom: "5px" }} />
              <p style={{ color: "#ccc" }}>
                <img src="/location.png" alt="loc" style={{ height: "14px", marginRight: "6px" }} />
                {location} - {prop.distance}
              </p>
              <div style={{ fontSize: "0.9rem", marginBottom: "5px" }}>
                {prop.offers.map((offer, i) => (
                  <span key={i} style={{ background: "#444", padding: "3px 6px", marginRight: "5px", borderRadius: "3px", color: "#eee" }}>
                    {offer}
                  </span>
                ))}
              </div>
              <div style={{ position: "absolute", right: "15px", top: "0", textAlign: "right" }}>
                <div style={{ fontWeight: "bold", color: "#F7D774" }}>{prop.rating}</div>
                <div style={{ color: "#ccc", fontSize: "0.9rem" }}>{prop.reviews}</div>
              </div>
              <div style={{ position: "absolute", right: "15px", bottom: "0", textAlign: "right" }}>
                <div style={{ color: "lightgreen", fontWeight: "bold" }}>+ FREE CANCELLATION</div>
                <div style={{ color: "tomato", fontSize: "1.2rem", fontWeight: "bold" }}>{prop.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {modalImages.length > 0 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "transparent",
              color: "white",
              fontSize: "2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <button onClick={prevImage} style={navButtonStyle}>
            ‹
          </button>
          <img src={modalImages[currentIndex]} style={{ maxHeight: "80%", maxWidth: "80%", borderRadius: "10px" }} />
          <button onClick={nextImage} style={navButtonStyle}>
            ›
          </button>
        </div>
      )}
    </div>
  )
}

const navButtonStyle = {
  background: "transparent",
  color: "white",
  fontSize: "3rem",
  border: "none",
  cursor: "pointer",
  margin: "0 20px",
}

const bgcProperties = [
  {
    name: "mySTAY Hotel BGC North",
    rating: "8.9 Excellent",
    reviews: "2,031 reviews",
    distance: "1.2 km to center",
    price: "₱ 1,076",
    offers: ["Free Wifi"],
    images: ["/myStay1.png", "/myStay2.png", "/myStay3.png", "/myStay4.png", "/myStay5.png"],
  },
  {
    name: "Mytown New York",
    rating: "8.2 Excellent",
    reviews: "5,898 reviews",
    distance: "0.3 km to center",
    price: "₱ 602",
    offers: ["Free Wifi"],
    images: ["/mytown1.png", "/mytown2.png", "/mytown3.png", "/mytown4.png", "/mytown5.png"],
  },
  {
    name: "Shangri-La Residences The Fort, Manila",
    rating: "9.1 Exceptional",
    reviews: "39 reviews",
    distance: "City center",
    price: "₱ 14,622",
    offers: ["Free Wifi"],
    images: ["/shangri1.png", "/shangri2.png", "/shangri3.png", "/shangri4.png", "/shangri5.png"],
  },
  {
    name: "Seda Bonifacio Global City",
    rating: "9.0 Exceptional",
    reviews: "13,170 reviews",
    distance: "0.6 km to center",
    price: "₱ 8,717",
    offers: ["Breakfast", "Free Fitness center access"],
    images: ["/seda1.png", "/seda2.png", "/seda3.png", "/seda4.png", "/seda5.png"],
  },
]

const makatiProperties = [
  {
    name: "One Pacific Place Serviced Residences",
    rating: "8.5 Excellent",
    reviews: "3,221 reviews",
    distance: "1.0 km to center",
    price: "₱ 2,100",
    offers: ["Free Wifi"],
    images: ["/pacific1.png", "/pacific2.png", "/pacific3.png", "/pacific4.png", "/pacific5.png"],
  },
  {
    name: "St Giles Makati - A St Giles Hotel, Manila",
    rating: "7.9 Good",
    reviews: "1,234 reviews",
    distance: "0.4 km to center",
    price: "₱ 1,650",
    offers: ["Free Wifi"],
    images: ["/StGiles1.png", "/StGiles2.png", "/StGiles3.png", "/StGiles4.png", "/StGiles5.png"],
  },
  {
    name: "The Mini Suites at Eton Tower Makati",
    rating: "8.0 Very Good",
    reviews: "4,500 reviews",
    distance: "0.7 km to center",
    price: "₱ 1,999",
    offers: ["Free Wifi"],
    images: ["/Minisuites1.png", "/Minisuites2.png", "/Minisuites3.png", "/Minisuites4.png", "/Minisuites5.png"],
  },
  {
    name: "Prince Plaza II Condotel",
    rating: "7.8 Good",
    reviews: "2,843 reviews",
    distance: "0.2 km to center",
    price: "₱ 1,850",
    offers: ["Free Wifi"],
    images: ["/Prince1.png", "/Prince2.png", "/Prince3.png", "/Prince4.png", "/Prince5.png"],
  },
]

const laUnionProperties = [
  {
    name: "Villas Buenavista",
    location: "San Juan, La Union",
    price: "₱3,875",
    rating: "7.8 Very good",
    reviews: "867 reviews",
    offers: ["Breakfast", "Parking"],
    images: ["./villas1.png", "./villas2.png", "./villas3.png", "./villas4.png", "./villas5.png"],
  },
  {
    name: "EL Navi Surftown",
    location: "San Juan, La Union",
    price: "₱2,975",
    rating: "7.6 Very good",
    reviews: "1,731 reviews",
    offers: ["Breakfast", "Free Wifi", "Welcome drink"],
    images: ["./elnavi1.png", "./elnavi2.png", "./elnavi3.png", "./elnavi4.png", "./elnavi5.png"],
  },
  {
    name: "Aureo Resort La Union",
    location: "San Fernando, La Union",
    price: "₱7,051",
    rating: "8.7 Excellent",
    reviews: "5,309 reviews",
    offers: ["Free Wifi", "Breakfast", "Parking"],
    images: ["./Aureo1.png", "./Aureo2.png", "./Aureo3.png", "./Aureo4.png", "./Aureo5.png"],
  },
  {
    name: "La Zarene Suites",
    location: "Bacnotan, La Union",
    price: "₱3,034",
    rating: "8.8 Excellent",
    reviews: "64 reviews",
    offers: ["Breakfast", "Welcome drink"],
    images: ["./Lazarene1.png", "./Lazarene2.png", "./Lazarene3.png", "./Lazarene4.png", "./Lazarene5.png"],
  },
]

const MactanProperties = [
  {
    name: "Belmont Hotel Mactan",
    location: "Mactan Island, Cebu",
    distance: "12.8 km to center",
    price: "₱2,530",
    rating: "8.9 Excellent",
    reviews: "6,649 reviews",
    offers: ["Breakfast", "Parking", "Free WiFi"],
    images: ["./Belmont1.png", "./Belmont2.png", "./Belmont3.png", "./Belmont4.png", "./Belmont5.png"],
  },
  {
    name: "Travelbee Airport Inn",
    location: "Mactan Island, Cebu",
    distance: "7.3 km to center",
    price: "₱1,383",
    rating: "8.7 Excellent",
    reviews: "2,468 reviews",
    offers: ["Breakfast", "Free WiFi"],
    images: ["./Travelbee1.png", "./Travelbee2.png", "./Travelbee3.png", "./Travelbee4.png", "./Travelbee5.png"],
  },
  {
    name: "Sotogrande Hotel & Resort",
    location: "Mactan Island, Cebu",
    distance: "10.9 km to center",
    price: "₱2,014",
    rating: "7.3 Very good",
    reviews: "2,972 reviews",
    offers: ["Breakfast", "Free fitness center access", "Free WiFi"],
    images: ["./Sotogrande1.png", "./Sotogrande2.png", "./Sotogrande3.png", "./Sotogrande4.png", "./Sotogrande5.png"],
  },
  {
    name: "Island Stay Hotels - Mactan",
    location: "Mactan Island, Cebu",
    distance: "7.1 km to center",
    price: "₱1,036",
    rating: "7.4 Very good",
    reviews: "3,716 reviews",
    offers: ["Express check-in", "Parking", "Free WiFi"],
    images: ["./Island1.png", "./Island2.png", "./Island3.png", "./Island4.png", "./Island5.png"],
  },
]

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
