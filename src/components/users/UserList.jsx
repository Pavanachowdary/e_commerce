import React from "react";
import { Table, Container, Card, Button, InputGroup, Form, Badge, Dropdown, ButtonGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus, FaPencilAlt, FaTrash, FaSearch } from 'react-icons/fa';

const UserList = () => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active", joined: "2023-01-15", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 2, name: "Bob Williams", email: "bob@example.com", role: "User", status: "Active", joined: "2023-02-20", avatar: "https://i.pravatar.cc/40?img=6" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Inactive", joined: "2023-03-10", avatar: "https://i.pravatar.cc/40?img=7" },
  ];
  
  const getStatusBadge = (status) => (status === 'Active' ? 'success' : 'secondary');
  const getRoleBadge = (role) => (role === 'Admin' ? 'primary' : 'info');


  return (
    <Container fluid>
      <Card className="shadow-sm">
        <Card.Header className="bg-white p-3 border-0">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold mb-0">Users</h3>
            <Button as={Link} to="/add-user" variant="primary">
              <FaPlus className="me-2" />Add User
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
            <InputGroup className="mb-3" style={{maxWidth: '400px'}}>
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control placeholder="Search by name or email..." />
            </InputGroup>
            <Table hover responsive className="align-middle">
            <thead className="bg-light">
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="d-flex align-items-center">
                        <Image src={u.avatar} roundedCircle width={40} height={40} className="me-3"/>
                        <div>
                            <div className="fw-semibold">{u.name}</div>
                            <div className="text-muted small">{u.email}</div>
                        </div>
                    </div>
                  </td>
                  <td><Badge bg={getRoleBadge(u.role)}>{u.role}</Badge></td>
                  <td><Badge bg={getStatusBadge(u.status)}>{u.status}</Badge></td>
                  <td>{u.joined}</td>
                  <td>
                    <ButtonGroup size="sm">
                       <Button variant="outline-secondary" as={Link} to={`/update-user/${u.id}`}><FaPencilAlt /></Button>
                       <Button variant="outline-danger"><FaTrash /></Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserList;