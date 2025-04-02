import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import ManagerDashboard from './ManagerDashboard';
import TenantDashboard from './TenantDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/tenant" element={<TenantDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);