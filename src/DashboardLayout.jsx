import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from './components/common/NavBar';
import SideBar from './components/common/SideBar';
import Footer from './components/common/Footer';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/products/ProductList';
import AddProduct from './components/products/AddProduct';
import UpdateProduct from './components/products/UpdateProduct';
import UserList from './components/users/UserList';
import UserForm from './components/users/UserForm';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const DashboardLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <div className="flex-grow-1 d-flex">
        <SideBar />
        <main className="flex-grow-1 bg-light">
          <Container fluid className="py-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/add-user" element={<UserForm />} />
              <Route path="/update-user/:id" element={<UserForm />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;