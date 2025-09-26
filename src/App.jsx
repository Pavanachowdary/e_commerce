import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import AdminLayout from "./components/admin/AdminLayout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Redirect root to login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Admin Dashboard Routes (protected) */}
        {/* In a real app, this would be a protected route */}
        <Route path="/*" element={<AdminLayout />} />

        {/* Fallback Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;