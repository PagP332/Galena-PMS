import React, { useState } from "react"
import { SignOutButton } from "./components/SignOutButton"

const ManagerDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard")

  const sectionContent = {
    Dashboard: <DashboardContent setActiveSection={setActiveSection} />,
    Properties: <PropertiesContent />,
    Maintenance: <MaintenanceContent />,
    Financials: <FinancialsContent />,

    "Pending Maintenance Request": <PendingMaintenanceRequest />,
    "IoT Devices Status": <IoTDevicesStatus />,
    "Upcoming Paymennts & Expenses": <UpComingPE />,
    "Meter Readings": <h2> Contents </h2>,
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
            setActiveSection={setActiveSection}
          />
          <DashboardCard
            imageSrc="./IoT.png"
            title="IoT Devices Status"
            description="Monitor HVAC, security, and smart locks in real-time"
            setActiveSection={setActiveSection}
          />
          <DashboardCard
            imageSrc="./UpcomingPayment.png"
            title="Upcoming Paymennts & Expenses"
            description="Stay updated on rent collections and due dates"
            setActiveSection={setActiveSection}
          />
          <DashboardCard
            imageSrc="./RecentTenantReq.png"
            title="Meter Readings"
            description="Keep track of logged tenant issues and responses"
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
    </div>
  )
}

// Dashboard Card Component
const DashboardCard = ({ imageSrc, title, description, setActiveSection }) => {
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
      onClick={() => setActiveSection(title)}
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

const PendingMaintenanceRequest = () => {
  const requestData = [
    {
      id: "001",
      property: "mySTAY Hotel BGC North",
      issue: "HVAC Malfunction",
      priority: "High",
      status: "In Progress",
      assignedTo: "John Doe",
      dueDate: "Apr 3",
    },
    {
      id: "002",
      property: "MyTown New York",
      issue: "Water Leak",
      priority: "Medium",
      status: "Pending",
      assignedTo: "Melissa Mock",
      dueDate: "Apr 5",
    },
    {
      id: "003",
      property: "Shangri-La Residences The Fort, Manila",
      issue: "Electrical Malfunction",
      priority: "High",
      status: "Pending",
      assignedTo: "Stephen King",
      dueDate: "Apr 4",
    },
    {
      id: "004",
      property: "Seda Bonifacio Global City",
      issue: "3",
      priority: "Medium",
      status: "Pending",
      assignedTo: "Edward Cullen",
      dueDate: "Apr 12",
    },
  ]

  const getPriorityDot = (priority) => {
    if (priority === "High") return <span style={{ color: "red" }}>●</span>
    if (priority === "Medium") return <span style={{ color: "orange" }}>●</span>
    return <span style={{ color: "white" }}>●</span>
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "black", color: "white" }}>
      <thead>
        <tr>
          <th style={headerStyle}>Request ID</th>
          <th style={headerStyle}>Property</th>
          <th style={headerStyle}>Issue</th>
          <th style={headerStyle}>Priority</th>
          <th style={headerStyle}>Status</th>
          <th style={headerStyle}>Assigned to</th>
          <th style={headerStyle}>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {requestData.map((request, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #D6C271" }}>
            <td style={cellStyle}>{request.id}</td>
            <td style={cellStyle}>{request.property}</td>
            <td style={cellStyle}>{request.issue}</td>
            <td style={cellStyle}>
              {getPriorityDot(request.priority)}{" "}
              <span style={{ color: getPriorityTextColor(request.priority), fontWeight: "bold" }}>{request.priority}</span>
            </td>
            <td style={cellStyle}>{request.status}</td>
            <td style={cellStyle}>{request.assignedTo}</td>
            <td style={cellStyle}>{request.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const headerStyle = {
  borderBottom: "2px solid #D6C271",
  padding: "10px",
  textAlign: "left",
  color: "#D6C271",
}

const cellStyle = {
  padding: "10px",
  borderBottom: "1px solid #D6C271",
}

const getPriorityTextColor = (priority) => {
  if (priority === "High") return "red"
  if (priority === "Medium") return "orange"
  return "white"
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

const UpComingPE = () => {
  const tenants = [
    {
      name: "Mark Tenorio",
      property: "mySTAY Hotel BGC North",
      rent: "₱20,000",
      due: "May 10, 2025",
      status: "Pending",
    },
    {
      name: "Leila Green",
      property: "mySTAY Hotel BGC North",
      rent: "₱15,000",
      due: "May 13, 2025",
      status: "Pending",
    },
    {
      name: "Sharon Cullen",
      property: "MyTown New York",
      rent: "₱20,000",
      due: "May 14, 2025",
      status: "Pending",
    },
  ]

  const containerStyle = {
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
  }

  const upComingHeaderStyle = {
    padding: "10px",
    borderBottom: "2px solid #D6C271",
    textAlign: "left",
    color: "#D6C271",
  }

  const upComingCellStyle = {
    padding: "10px",
    borderBottom: "1px solid #D6C271",
    verticalAlign: "top",
  }

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    padding: "5px 0",
    fontSize: "14px",
    textAlign: "left",
    display: "block",
  }

  const handleGenerateReport = (tenantName) => {
    alert(`Generate report for ${tenantName}`)
  }

  const handleSendReminder = (tenantName) => {
    alert(`Send reminder to ${tenantName}`)
  }

  return (
    <div style={containerStyle}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={upComingHeaderStyle}>Tenant Name</th>
            <th style={upComingHeaderStyle}>Property</th>
            <th style={upComingHeaderStyle}>Rent Due</th>
            <th style={upComingHeaderStyle}>Due Date</th>
            <th style={upComingHeaderStyle}>Status</th>
            <th style={upComingHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, index) => (
            <tr key={index}>
              <td style={upComingCellStyle}>{tenant.name}</td>
              <td style={upComingCellStyle}>{tenant.property}</td>
              <td style={upComingCellStyle}>{tenant.rent}</td>
              <td style={upComingCellStyle}>{tenant.due}</td>
              <td style={upComingCellStyle}>
                <span
                  style={{
                    color: "#F5C542",
                    fontWeight: "bold",
                  }}
                >
                  ● {tenant.status}
                </span>
              </td>
              <td style={upComingCellStyle}>
                <button style={buttonStyle} onClick={() => handleGenerateReport(tenant.name)}>
                  🧾 Generate Payment Report
                </button>
                <button style={buttonStyle} onClick={() => handleSendReminder(tenant.name)}>
                  ✉️ Send Payment Reminder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
