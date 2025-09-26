import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './services/context/AuthContext.jsx';
import { Button } from 'react-bootstrap';
import { Home } from './home.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
    <Home />
    </AuthContextProvider>
  </BrowserRouter>,
);