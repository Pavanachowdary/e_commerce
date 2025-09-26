import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Dropdown, Badge, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  FaBell, 
  FaEnvelope, 
  FaSignOutAlt, 
  FaUser, 
  FaCog, 
  FaSearch,
  FaMoon,
  FaSun,
  FaShoppingCart,
  FaHome,
  FaBox,
  FaUsers,
  FaChartBar,
  FaBars
} from "react-icons/fa";

const AppNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState([
    { id: 1, message: "New order #1234 received", time: "2 min ago", read: false },
    { id: 2, message: "Product 'Smart Watch' stock low", time: "1 hour ago", read: false },
    { id: 3, message: "Your monthly report is ready", time: "3 hours ago", read: true }
  ]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd save this to localStorage and apply it globally
  };

  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    switch(path) {
        case 'dashboard': return 'Dashboard';
        case 'products': return 'Products';
        case 'add-product': return 'Add Product';
        case 'users': return 'Users';
        default: return 'Dashboard';
    }
  };

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top px-3" style={{ zIndex: 1030 }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/dashboard" className="text-primary fw-bolder fs-4 d-flex align-items-center">
            <FaShoppingCart className="me-2" />
            EcommercePro
          </Navbar.Brand>
          
          <div className="d-flex align-items-center ms-auto">
             <div className="d-lg-none">
                 <h5 className="mb-0 fw-bold me-3">{getPageTitle()}</h5>
             </div>
             <Button variant="light" className="d-lg-none" onClick={() => setShowMobileMenu(true)}>
                 <FaBars />
             </Button>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* Search Bar - Desktop */}
              <div className="d-none d-lg-flex flex-grow-1 me-3">
                <InputGroup style={{ maxWidth: '400px' }}>
                  <Form.Control
                    type="search"
                    placeholder="Search products, orders..."
                    className="border-end-0"
                  />
                  <InputGroup.Text className="bg-white border-start-0">
                    <FaSearch className="text-muted" />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              {/* Dark Mode Toggle */}
              <Button
                variant="light"
                onClick={toggleDarkMode}
                className="me-2 rounded-circle p-2 d-none d-lg-flex"
                style={{ width: '40px', height: '40px' }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </Button>

              {/* Notifications Dropdown */}
              <Dropdown className="me-2">
                <Dropdown.Toggle
                  variant="light"
                  className="rounded-circle p-2 position-relative d-none d-lg-flex"
                  style={{ width: '40px', height: '40px' }}
                >
                  <FaBell />
                  {unreadNotifications > 0 && (
                    <Badge 
                      bg="danger" 
                      className="position-absolute top-0 start-100 translate-middle rounded-pill"
                      style={{ fontSize: '0.6rem', padding: '0.3em 0.5em' }}
                    >
                      {unreadNotifications}
                    </Badge>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="shadow-lg" style={{ width: '320px' }}>
                    <Dropdown.Header>
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>Notifications</strong>
                            <Badge bg="primary">{unreadNotifications} New</Badge>
                        </div>
                    </Dropdown.Header>
                    {notifications.map(n => (
                        <Dropdown.Item key={n.id} className={n.read ? 'text-muted' : ''}>
                           <div className="d-flex justify-content-between">
                             <div>
                                <div className="fw-semibold small">{n.message}</div>
                                <small className="text-muted">{n.time}</small>
                             </div>
                             {!n.read && <div className="text-primary ms-2 align-self-center">•</div>}
                           </div>
                        </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-center text-primary small">
                        View all notifications
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* User Dropdown */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  className="d-none d-lg-flex align-items-center p-2 rounded-pill"
                >
                  <FaUser className="rounded-circle bg-secondary p-1 text-white me-2" size={24} />
                  <span className="fw-semibold">Admin User</span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="shadow-lg">
                  <Dropdown.Header>
                      <div className="fw-semibold">Admin User</div>
                      <small className="text-muted">admin@ecommercepro.com</small>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item><FaUser className="me-2" /> My Profile</Dropdown.Item>
                  <Dropdown.Item><FaCog className="me-2" /> Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="text-danger">
                    <FaSignOutAlt className="me-2" /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary fw-bolder fs-4">
            <FaShoppingCart className="me-2" />
            EcommercePro
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="mb-4">
            <InputGroup><Form.Control type="search" placeholder="Search..."/><InputGroup.Text><FaSearch /></InputGroup.Text></InputGroup>
          </Form>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard" className="py-2 fs-5"><FaHome className="me-3" /> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/products" className="py-2 fs-5"><FaBox className="me-3" /> Products</Nav.Link>
            <Nav.Link as={Link} to="/users" className="py-2 fs-5"><FaUsers className="me-3" /> Users</Nav.Link>
            <Nav.Link as={Link} to="/analytics" className="py-2 fs-5"><FaChartBar className="me-3" /> Analytics</Nav.Link>
            <Nav.Link href="#" className="py-2 fs-5"><FaCog className="me-3" /> Settings</Nav.Link>
          </Nav>
          <div className="mt-auto">
            <hr />
            <Button variant="danger" onClick={handleLogout} className="w-100">
              <FaSignOutAlt className="me-2" /> Logout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNavbar;