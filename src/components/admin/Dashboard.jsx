import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Image, Badge, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaDollarSign,
  FaCartShopping, // Corrected from FaShoppingCart
  FaUsers,
  FaBoxOpen,
  FaArrowUp, FaArrowDown, FaEllipsis, FaArrowTrendUp, FaArrowTrendDown, FaChartLine
} from 'react-icons/fa6';

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }) => (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="text-muted mb-1 small text-uppercase">{title}</p>
            <h3 className="fw-bold mb-1">{value}</h3>
            <div className={`d-flex align-items-center small ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
              <span>{change} vs last period</span>
            </div>
          </div>
          <div className={`p-3 rounded-circle bg-${color} bg-opacity-10`}>
            <Icon className={`text-${color}`} size={24} />
          </div>
        </div>
      </Card.Body>
    </Card>
);

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: 'Total Revenue', value: '$45,890', change: '+12.5%', isPositive: true, icon: FaDollarSign, color: 'success' },
    { title: 'Total Orders', value: '2,456', change: '+8.2%', isPositive: true, icon: FaCartShopping, color: 'primary' }, // Corrected Icon
    { title: 'New Customers', value: '1,245', change: '-2.1%', isPositive: false, icon: FaUsers, color: 'info' },
    { title: 'Products Sold', value: '8,642', change: '+15.3%', isPositive: true, icon: FaBoxOpen, color: 'warning' }
  ];

  // ... rest of the component is the same ...
  
  const topProducts = [
    { id: 101, name: 'Wireless Headphones', category: 'Electronics', price: '$249.99', stock: 45, sales: 156, imageUrl: 'https://i.pravatar.cc/50?img=1' },
    { id: 102, name: 'Modern Leather Sofa', category: 'Furniture', price: '$899.00', stock: 12, sales: 23, imageUrl: 'https://i.pravatar.cc/50?img=2' },
    { id: 103, name: 'Organic Green Tea', category: 'Groceries', price: '$12.50', stock: 234, sales: 89, imageUrl: 'https://i.pravatar.cc/50?img=3' },
    { id: 104, name: 'Classic Denim Jacket', category: 'Apparel', price: '$75.00', stock: 67, sales: 134, imageUrl: 'https://i.pravatar.cc/50?img=4' },
  ];

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="fw-bold mb-1">Dashboard</h2>
          <p className="text-muted">Welcome back! Here's a snapshot of your store's performance.</p>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        {stats.map((stat, index) => (
          <Col lg={3} md={6} key={index}>
            <StatCard {...stat} />
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        <Col lg={8}>
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">Top Selling Products</h5>
              <Button variant="outline-primary" size="sm" as={Link} to="/products">View All</Button>
            </Card.Header>
            <Card.Body className="p-0">
              <Table hover responsive className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="border-0 ps-3">Product</th>
                    <th className="border-0">Category</th>
                    <th className="border-0">Sales</th>
                    <th className="border-0">Stock</th>
                    <th className="border-0">Trend</th>
                    <th className="border-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map(p => (
                    <tr key={p.id}>
                      <td className="align-middle ps-3">
                        <div className="d-flex align-items-center">
                          <Image src={p.imageUrl} roundedCircle width="40" height="40" className="me-3" />
                          <div>
                            <div className="fw-semibold">{p.name}</div>
                            <small className="text-muted">ID: {p.id}</small>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle"><Badge bg="light" text="dark">{p.category}</Badge></td>
                      <td className="align-middle">{p.sales}</td>
                      <td className="align-middle">
                        <span className={p.stock < 20 ? 'text-danger' : 'text-success'}>{p.stock}</span>
                      </td>
                      <td className="align-middle">
                        {p.sales > 100 ? <FaArrowTrendUp className="text-success" /> : <FaArrowTrendDown className="text-danger" />}
                      </td>
                      <td className="align-middle">
                        <Dropdown>
                          <Dropdown.Toggle variant="light" size="sm" className="border-0"><FaEllipsis /></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>View</Dropdown.Item>
                            <Dropdown.Item>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="h-100 shadow-sm">
             <Card.Header className="bg-white"><h5 className="fw-bold mb-0">Sales Trend</h5></Card.Header>
             <Card.Body className="d-flex align-items-center justify-content-center">
                <div className="text-center text-muted">
                    <FaChartLine size={60} className="mb-3" />
                    <h6>Sales Chart Placeholder</h6>
                    <p className="small">A beautiful chart will be displayed here.</p>
                </div>
             </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;