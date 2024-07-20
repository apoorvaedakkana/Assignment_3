import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure you have corresponding CSS for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (isOpen) {
          toggleSidebar();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <h3>TCE</h3>
      <ul>
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li><Link to="/schedule" onClick={toggleSidebar}>Schedule</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        <li><Link to="/register" onClick={toggleSidebar}>Register</Link></li>
        <li><Link to="/Events" onClick={toggleSidebar}>Events</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;
