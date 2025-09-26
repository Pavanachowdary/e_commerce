import React from "react";
import { Table, Container, Card, Button, InputGroup, Form, Badge, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus, FaPencilAlt, FaTrash, FaSearch, FaEllipsisV } from 'react-icons/fa';

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: "$1200", category: "Electronics", stock: 45, status: "Active" },
    { id: 2, name: "Running Shoes", price: "$80", category: "Fashion", stock: 120, status: "Active" },
    { id: 3, name: "Smart Watch", price: "$200", category: "Accessories", stock: 0, status: "Out of Stock" },
    { id: 4, name: "Organic Green Tea", price: "$12.50", category: "Groceries", stock: 234, status: "Active" },
    { id: 5, name: "Classic Denim Jacket", price: "$75.00", category: "Apparel", stock: 12, status: "Low Stock" },
  ];

  const getStatusBadge = (status) => {
      switch(status) {
          case 'Active': return 'success';
          case 'Low Stock': return 'warning';
          case 'Out of Stock': return 'danger';
          default: return 'secondary';
      }
  }

  return (
    <Container fluid>
      <Card className="shadow-sm">
        <Card.Header className="bg-white p-3 border-0">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-0">Products</h3>
            <Button as={Link} to="/add-product" variant="primary">
              <FaPlus className="me-2" />Add Product
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
            <InputGroup className="mb-3" style={{maxWidth: '400px'}}>
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control placeholder="Search by product name..." />
            </InputGroup>
            <Table hover responsive className="align-middle">
            <thead className="bg-light">
              <tr>
                <th><Form.Check type="checkbox" /></th>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td><Form.Check type="checkbox" /></td>
                  <td><span className="fw-semibold">{p.name}</span></td>
                  <td>{p.category}</td>
                  <td>{p.stock}</td>
                  <td>{p.price}</td>
                  <td><Badge bg={getStatusBadge(p.status)}>{p.status}</Badge></td>
                  <td>
                    <ButtonGroup size="sm">
                       <Button variant="outline-secondary" as={Link} to={`/update-product/${p.id}`}><FaPencilAlt /></Button>
                       <Button variant="outline-danger"><FaTrash /></Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
         <Card.Footer className="bg-white border-0">
            {/* Pagination would go here */}
         </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProductList;