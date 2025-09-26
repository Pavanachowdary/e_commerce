import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Simple test component
const TestComponent = () => (
  <div className="container mt-5">
    <div className="alert alert-success">
      <h1>🎉 React App is Working!</h1>
      <p>Your e-commerce app is now running successfully.</p>
      <hr />
      <p className="mb-0">
        <strong>Next steps:</strong> Navigate to <code>/login</code> to see the login page.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="*" element={<TestComponent />} />
      </Routes>
    </Router>
  );
}

export default App;