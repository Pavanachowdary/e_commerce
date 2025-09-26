import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fw-semibold">Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Button as={Link} to="/dashboard" variant="primary">
        Go to Dashboard
      </Button>
    </Container>
  );
};

export default NotFoundPage;