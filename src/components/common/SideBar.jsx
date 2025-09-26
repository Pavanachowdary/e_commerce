import React, { useState, useEffect } from "react";
import { Nav, Collapse, Badge, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { 
  FaTachometerAlt, 
  FaBoxOpen, 
  FaUsers, 
  FaShoppingCart,
  FaChartBar,
  FaCog,
  FaChevronDown,
  FaQuestionCircle
} from "react-icons/fa";
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const activeParent = menuItems.find(item => 
        item.subItems?.some(sub => location.pathname.startsWith(sub.path))
    );
    if (activeParent) {
        setOpenMenus(prev => ({ ...prev, [activeParent.key]: true }));
    }
  }, [location.pathname]);

  const toggleMenu = (menuKey) => {
    setOpenMenus(prev => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  const menuItems = [
    { key: 'dashboard', icon: FaTachometerAlt, label: 'Dashboard', path: '/dashboard' },
    { 
      key: 'products', icon: FaBoxOpen, label: 'Products', 
      subItems: [
        { label: 'All Products', path: '/products' },
        { label: 'Add Product', path: '/add-product' },
      ]
    },
    { 
      key: 'orders', icon: FaShoppingCart, label: 'Orders', path: '/orders',
      badge: '23', badgeVariant: 'warning',
    },
    { 
      key: 'users', icon: FaUsers, label: 'Users',
      subItems: [
        { label: 'All Users', path: '/users' },
        { label: 'Add User', path: '/add-user' },
      ]
    },
    // { key: 'analytics', icon: FaChartBar, label: 'Analytics', path: '/analytics' }, // <-- THIS LINE HAS BEEN REMOVED
    { key: 'settings', icon: FaCog, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="sidebar-container bg-white shadow-sm d-none d-lg-block">
      <div className="sidebar-inner">
        <Nav className="flex-column p-3">
          {menuItems.map(item => (
            <div key={item.key} className="nav-item-container mb-1">
              {item.subItems ? (
                <>
                  <Nav.Link
                    onClick={() => toggleMenu(item.key)}
                    className="d-flex justify-content-between align-items-center nav-link-custom"
                    aria-expanded={openMenus[item.key]}
                  >
                    <div className="d-flex align-items-center">
                      <item.icon className="me-3" size={18} />
                      <span className="fw-semibold">{item.label}</span>
                    </div>
                    <FaChevronDown className={`chevron ${openMenus[item.key] ? 'open' : ''}`} size={12} />
                  </Nav.Link>
                  <Collapse in={openMenus[item.key]}>
                    <div className="submenu ms-4 ps-3 border-start">
                      {item.subItems.map(subItem => (
                        <Nav.Link as={NavLink} to={subItem.path} key={subItem.path} className="nav-link-custom sub-link">
                          {subItem.label}
                        </Nav.Link>
                      ))}
                    </div>
                  </Collapse>
                </>
              ) : (
                <Nav.Link as={NavLink} to={item.path} className="nav-link-custom d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <item.icon className="me-3" size={18} />
                    <span className="fw-semibold">{item.label}</span>
                  </div>
                  {item.badge && <Badge bg={item.badgeVariant || 'secondary'} pill>{item.badge}</Badge>}
                </Nav.Link>
              )}
            </div>
          ))}
        </Nav>

        <div className="mt-auto p-3">
          <div className="p-3 bg-light rounded-3 text-center">
            <h6 className="small fw-bold mb-2">Need Help?</h6>
            <p className="small text-muted mb-2">Check our docs or contact support.</p>
            <Button variant="primary" size="sm" className="w-100">
                <FaQuestionCircle className="me-1" /> Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;