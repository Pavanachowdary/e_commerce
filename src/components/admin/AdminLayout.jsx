import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// These paths go UP ONE LEVEL to find the "common" folder
import Navbar from '../common/NavBar';
import Sidebar from '../common/SideBar';
import Footer from '../common/Footer';

// These paths look in the CURRENT "admin" folder
import Dashboard from './Dashboard';
import ProductList from '../products/ProductList';      // Check the 'ProductList.jsx' filename
import AddProduct from '../products/AddProduct';        // Check the 'AddProduct.jsx' filename
import UpdateProduct from '../products/UpdateProduct';  // Check the 'UpdateProduct.jsx' filename
import UserList from '../users/UserList';               // Check the 'UserList.jsx' filename
import UserForm from '../users/UserForm';               // Check the 'UserForm.jsx' filename

// This path goes UP TWO LEVELS to find the "pages" folder
import NotFoundPage from '../../pages/NotFoundPage';

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Container fluid>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/add-user" element={<UserForm />} />
              <Route path="/update-user/:id" element={<UserForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;