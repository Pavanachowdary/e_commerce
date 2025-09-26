import React, { useState, useEffect } from 'react';
import { Container, Card, Alert, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaSave, FaArrowLeft, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const UserForm = () => {
  const { id } = useParams();
  const isUpdating = !!id;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isUpdating) {
      // In a real app, you would fetch user data from an API
      // Simulating fetching data for an existing user
      console.log(`Fetching data for user ID: ${id}`);
      const mockUser = { name: 'Bob Williams', email: 'bob@example.com', role: 'User', status: 'Active' };
      setFormData({ ...mockUser, password: '' });
    }
  }, [id, isUpdating]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isUpdating) {
        console.log("Updating user:", formData);
        setSuccess(`User "${formData.name}" has been successfully updated!`);
      } else {
        console.log("Creating new user:", formData);
        setSuccess(`User "${formData.name}" has been successfully created!`);
      }
      // Redirect back to user list after a delay
      setTimeout(() => navigate('/users'), 2000);
    }, 1000);
  };

  return (
    <Container fluid>
      <div className="d-flex align-items-center mb-4">
        <Button as={Link} to="/users" variant="light" className="me-3">
          <FaArrowLeft />
        </Button>
        <h2 className="fw-bold mb-0">{isUpdating ? `Edit User` : "Add New User"}</h2>
      </div>

      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Card className="shadow-sm">
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name" 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address" 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>

            {!isUpdating && (
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password" 
                      required 
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Role</Form.Label>
                  <Form.Select name="role" value={formData.role} onChange={handleChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Status</Form.Label>
                  <Form.Select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <div className="mt-4 d-flex justify-content-end">
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2"/>
                ) : (
                  <FaSave className="me-2" />
                )}
                {isUpdating ? 'Update User' : 'Save User'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserForm;