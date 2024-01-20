import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Login from './Login';


function AppBar() {
  return (
    <Navbar expand="lg" className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <h2>
            {" "}
            <span>
              {" "}
              <i className="bi bi-file-music"></i> freaky-Band
            </span>{" "}
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-center align-items-center">
            <NavLink
              className={` ${({ isActive }) =>
                isActive ? "active" : null} nav-link fw-semibold `}
              to="/"
            >
              {" "}
              <i className="bi bi-house-door"></i> Home
            </NavLink>

            <NavLink
              className={` ${({ isActive }) =>
                isActive ? "active" : null} nav-link fw-semibold `}
              to="/Aboutus"
            >
              <i className="bi bi-info-circle"></i> About us
            </NavLink>

            <NavLink
              className={` ${({ isActive }) =>
                isActive ? "active" : null} nav-link fw-semibold `}
              to="/Getpass"
            >
              <i className="bi bi-ticket-perforated"></i> Get pass
            </NavLink>

           

            {/* <NavLink href="#Register" className="fw-semibold">
              {" "}
              {" "}
            </NavLink> */}

            <Login />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;



