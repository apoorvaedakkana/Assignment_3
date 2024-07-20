// src/components/Header.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar className="header" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">TCE Hackathon: React-a-Thon</Navbar.Brand>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <span className="toggle-icon" role="button" aria-label="Toggle Sidebar">
            ☰
          </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
