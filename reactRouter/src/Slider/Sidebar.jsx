import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: '/',
      name: 'Home',
      icon: <FaTh />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: <FaRegChartBar />,
    },
    {
      path: '/signIn',
      name: 'Sign In',
      icon: <FaCommentAlt />,
    },
    {
      path: '/signUp',
      name: 'Sign Up',
      icon: <FaShoppingBag />,
    },
    {
      path: '/services',
      name: 'Services',
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container w-full">
      <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
        <div className="top-section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `link ${isActive ? 'active' : ''}`
              }
            >
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar;
