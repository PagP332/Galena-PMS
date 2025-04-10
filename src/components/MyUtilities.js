import React from "react";

const MyUtilities = () => {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Utility Consumption</h1>

      {/* Utility Cards */}
      <div style={utilityCardsContainer}>
        <div style={utilityCard}>
          <p style={cardTitle}>Energy Usage</p>
          <h2 style={usageValue}>50 kWh</h2>
          <p style={usageChange}>-10%</p>
        </div>
        <div style={utilityCard}>
          <p style={cardTitle}>Water Usage</p>
          <h2 style={usageValue}>100 gallons</h2>
          <p style={usageChange}>+5%</p>
        </div>
      </div>

      {/* Usage Trends Graph Placeholder */}
      <div style={graphContainer}>
        <h3 style={graphTitle}>Usage Trends</h3>
        <p style={graphSubtitle}>Consumption</p>
        <div style={graphPlaceholder}></div>
      </div>
    </div>
  );
};

// Styles
const pageStyle = { padding: "2rem", backgroundColor: "#1e1e1e", color: "white", height: "100vh" };
const headingStyle = { textAlign: "center", fontSize: "24px", fontWeight: "bold" };

const utilityCardsContainer = { display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "20px" };
const utilityCard = { background: "#111", padding: "1.5rem", borderRadius: "8px", minWidth: "200px", textAlign: "center", border: "1px solid #333" };
const cardTitle = { fontSize: "14px", color: "#bbb" };
const usageValue = { fontSize: "20px", fontWeight: "bold", color: "#d4af37" };
const usageChange = { fontSize: "14px", color: "#999" };

const graphContainer = { marginTop: "2rem", padding: "1rem", borderRadius: "8px", background: "#111", textAlign: "center", border: "1px solid #333" };
const graphTitle = { fontSize: "18px", fontWeight: "bold", color: "#d4af37" };
const graphSubtitle = { fontSize: "14px", color: "#bbb" };
const graphPlaceholder = { height: "150px", background: "linear-gradient(to right, #d4af37, transparent)", borderRadius: "5px", marginTop: "10px" };

export default MyUtilities;
