import React from "react";

const TenantDashboard = () => {
  return (
    <div style={pageStyle}>
      <div style={contentWrapper}>
        <div style={textContainer}>
          <h1 style={headingStyle}>Welcome Tenant 101!</h1>
          <p style={subTextStyle}>Manage your home efficiently</p>
        </div>
        <div style={imageContainer}>
          <img src="/assets/welcome.png" alt="Welcome" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

// Styles
const pageStyle = { 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  height: "100vh", 
  backgroundColor: "#000", 
  color: "#B59837",
  overflow: "hidden" // Prevent scrolling
};

const contentWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "80%",
  width: "100%"
};

const textContainer = { 
  flex: 1, 
  textAlign: "center"
};

const headingStyle = { 
  fontSize: "2rem", 
  fontWeight: "bold", 
  marginBottom: "10px" 
};

const subTextStyle = { 
  fontSize: "1rem", 
  color: "#ccc" 
};

const imageContainer = { 
  flex: 1, 
  display: "flex", 
  justifyContent: "center"
};

const imageStyle = { 
  width: "100%", 
  maxWidth: "400px", 
  borderRadius: "10px" 
};

export default TenantDashboard;
