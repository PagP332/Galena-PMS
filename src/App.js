import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TenantDashboard from "./TenantDashboard";
import MyUtilities from "./MyUtilities";
import Billing from "./Billing";
import MaintenanceRequests from "./MaintenanceRequests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TenantDashboard />} />
          <Route path="utilities" element={<MyUtilities />} />
          <Route path="billing" element={<Billing />} />
          <Route path="maintenance" element={<MaintenanceRequests />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;