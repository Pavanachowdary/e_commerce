import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, InputGroup, ProgressBar, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShoppingCart } from "react-icons/fa";
import './AuthPage.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const navigate = useNavigate();

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length > 7) strength += 25;
        if (password.match(/[a-z]+/)) strength += 25;
        if (password.match(/[A-Z]+/)) strength += 25;
        if (password.match(/[0-9]+/)) strength += 25;
        return strength;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }
    };
    
    const getPasswordStrengthColor = () => {
        if (passwordStrength < 50) return 'danger';
        if (passwordStrength < 75) return 'warning';
        return 'success';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            console.log("Registering user:", formData);
            setIsLoading(false);
            navigate("/dashboard");
        }, 1500);
    };

    return (
        <Container fluid className="p-0 auth-page">
            <Row className="g-0 h-100">
                <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center auth-promo-bg">
                     <div className="text-center p-5">
                        <FaShoppingCart size={80} className="mb-4" />
                        <h1 className="display-4 fw-bolder">Join Us</h1>
                        <p className="lead mt-3">Create your account to start managing your e-commerce business like a pro.</p>
                    </div>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-center bg-light">
                    <div className="auth-form-container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Create Your Account</h2>
                            <p className="text-muted">It's free and only takes a minute.</p>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Full Name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaUser /></InputGroup.Text>
                                    <Form.Control name="fullName" type="text" placeholder="Enter your full name" onChange={handleInputChange} required />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Email Address</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                                    <Form.Control name="email" type="email" placeholder="Enter your email" onChange={handleInputChange} required />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaLock /></InputGroup.Text>
                                    <Form.Control name="password" type="password" placeholder="Create a password" onChange={handleInputChange} required />
                                </InputGroup>
                                {formData.password && (
                                    <ProgressBar variant={getPasswordStrengthColor()} now={passwordStrength} style={{ height: '5px' }} className="mt-2" />
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><FaLock /></InputGroup.Text>
                                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm your password" onChange={handleInputChange} required />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Check type="checkbox" id="terms" label={<>I agree to the <Link to="/terms">Terms & Conditions</Link></>} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold" disabled={isLoading}>
                                {isLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2"/> : 'Create Account'}
                            </Button>
                        </Form>
                        <div className="text-center mt-4 text-muted">
                            Already have an account? <Link to="/login" className="fw-semibold">Login</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignupPage;