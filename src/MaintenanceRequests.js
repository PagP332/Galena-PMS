import React, { useState } from "react";

const MaintenanceRequests = () => {
  const [emergencyType, setEmergencyType] = useState(""); // Stores selected emergency type
  const [description, setDescription] = useState(""); // Stores user input

  // Function to handle emergency type selection
  const handleEmergencyType = (type) => {
    setEmergencyType(type);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!description.trim() || !emergencyType) {
      alert("Please provide a description and select an emergency type.");
      return;
    }

    alert(`Emergency Request Submitted!\nType: ${emergencyType}\nDescription: ${description}`);
    setDescription(""); // Reset description field
    setEmergencyType(""); // Reset selected type
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "#d4af37" }}>My Tasks</h1>

      <div style={taskContainerStyle}>
        <div style={taskStyle}>
          <img src="/wrench.png" alt="Wrench" style={squareFrameStyle} />
          <p>Fix Leak in Bathroom</p>
          <small>Submitted: 2 days ago</small>
        </div>
        <div style={taskStyle}>
          <img src="/lock.png" alt="Lock" style={squareFrameStyle} />
          <p>Install Smart Lock</p>
          <small>Scheduled: Tomorrow</small>
        </div>
      </div>

      <div style={requestBoxStyle}>
        <h2 style={{ color: "#d4af37" }}>Emergency Request</h2>
        <input
          type="text"
          placeholder="Describe the emergency..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />

        <div style={buttonContainerStyle}>
          <button
            style={{ ...buttonStyle, backgroundColor: emergencyType === "Maintenance" ? "#d4af37" : "#444" }}
            onClick={() => handleEmergencyType("Maintenance")}
          >
            Maintenance
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: emergencyType === "Security" ? "#d4af37" : "#444" }}
            onClick={() => handleEmergencyType("Security")}
          >
            Security
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: emergencyType === "Other" ? "#d4af37" : "#444" }}
            onClick={() => handleEmergencyType("Other")}
          >
            Other
          </button>
        </div>

        <button style={submitButtonStyle} onClick={handleSubmit}>
          Submit Request
        </button>
      </div>
    </div>
  );
};

// Styles
const pageStyle = { padding: "2rem", backgroundColor: "#1e1e1e", color: "white", height: "100vh" };
const taskContainerStyle = { display: "flex", gap: "2rem", marginBottom: "2rem" };
const taskStyle = { textAlign: "center", color: "white" };
const squareFrameStyle = { width: "100px", height: "100px", objectFit: "cover", backgroundColor: "#333", padding: "10px" };
const requestBoxStyle = { background: "#333", padding: "1.5rem", borderRadius: "8px", maxWidth: "600px" };
const inputStyle = { width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none", fontSize: "16px" };
const buttonContainerStyle = { display: "flex", gap: "10px", marginBottom: "10px" };
const buttonStyle = { padding: "10px", color: "white", border: "none", borderRadius: "5px", flex: "1", cursor: "pointer" };
const submitButtonStyle = { padding: "12px", backgroundColor: "#d4af37", color: "black", border: "none", borderRadius: "5px", width: "100%", fontSize: "16px", cursor: "pointer" };

export default MaintenanceRequests;
