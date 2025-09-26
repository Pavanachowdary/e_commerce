import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaHeart
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-muted mt-auto border-top">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col md={6}>
            <small>&copy; {currentYear} EcommercePro. All Rights Reserved.</small>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <a href="#!" className="text-muted"><FaFacebook /></a>
              <a href="#!" className="text-muted"><FaTwitter /></a>
              <a href="#!" className="text-muted"><FaLinkedin /></a>
              <a href="#!" className="text-muted"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;