import React, { useState } from "react";

const Billing = () => {
  // States for inputs
  const [totalDue, setTotalDue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Unpaid");

  // Function to handle payment
  const handlePay = () => {
    if (totalDue && dueDate) {
      setPaymentStatus("Paid");
      alert("Payment Successful!");
    } else {
      alert("Please enter valid billing details.");
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Billing</h1>

      {/* Billing Fields */}
      <div style={inputContainer}>
        <input
          type="text"
          placeholder="Total Amount Due"
          value={totalDue}
          onChange={(e) => setTotalDue(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          value={`Payment Status: ${paymentStatus}`}
          readOnly
          style={inputStyle}
        />
      </div>

      {/* Pay Button */}
      <button onClick={handlePay} style={payButton}>
        Pay
      </button>
    </div>
  );
};

// Styles
const pageStyle = { padding: "2rem", backgroundColor: "#1e1e1e", color: "white", height: "100vh", textAlign: "center" };
const headingStyle = { fontSize: "24px", fontWeight: "bold", marginBottom: "20px" };

const inputContainer = { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" };
const inputStyle = { padding: "10px", borderRadius: "5px", border: "none", background: "#ccc", fontSize: "16px", minWidth: "180px", textAlign: "center" };

const payButton = { padding: "10px 20px", fontSize: "18px", fontWeight: "bold", borderRadius: "5px", border: "none", background: "#d4af37", cursor: "pointer" };

export default Billing;

