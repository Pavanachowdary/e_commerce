import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="text-center py-5">
      <h1>Welcome to EcommercePro</h1>
      <p>This is the public homepage. The main application is the admin dashboard.</p>
      <Button as={Link} to="/dashboard" variant="primary">Go to Dashboard</Button>
    </Container>
  );
};

export default HomePage;