import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, InputGroup, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [email, setEmail] = useState("admin@ecommercepro.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setTimeout(() => {
      if (email === "admin@ecommercepro.com" && password === "password123") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container fluid className="d-flex align-items-center bg-light" style={{ minHeight: "100vh", padding: 0 }}>
      <Row className="w-100 g-0">
        {/* LEFT SIDE */}
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-white p-5 left-panel">
          <div className="text-center">
            <h1 className="fw-bold mb-3">EcommercePro</h1>
            <p className="lead">
              Your all-in-one solution for managing your business <br />
              with unparalleled ease and efficiency.
            </p>
          </div>
        </Col>

        {/* RIGHT SIDE */}
        <Col md={6} className="d-flex align-items-center justify-content-center p-5">
          <div className="auth-form-container w-100" style={{ maxWidth: "400px" }}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Welcome Back!</h2>
              <p className="text-muted">Login to continue to your dashboard.</p>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email Address</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" id="rememberMe" label="Remember me" />
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 py-2 fw-semibold" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2"/>
                ) : 'Login'}
              </Button>
            </Form>
            <div className="text-center mt-4 text-muted">
              Don't have an account? <Link to="/signup" className="fw-semibold">Register now</Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* Inline CSS */}
      <style>{`
        .left-panel {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          min-height: 100vh;
        }
      `}</style>
    </Container>
  );
};

export default LoginPage;
