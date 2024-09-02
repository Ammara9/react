import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import NavbarProfileImage from './NavbarProfileImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase/firebase';
import './navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const getCurrentUser = () => {
  
    const user = auth.currentUser;
    return user ? { uid: user.uid } : null;
  };

  const user = getCurrentUser();

  const handleLogoClick = () => {
    // Use useNavigate to navigate to the home page when the logo is clicked
    navigate('/home');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#4CAF83', color: 'white' }}>
        <div className="container-fluid" style={{ backgroundColor: '#4CAF83', color: 'white' }}>
          <Navbar.Brand as={Link} to="/home" style={{ color: 'white' }} onClick={handleLogoClick}>
            <img
              src="bilder/logo-to-klimatkoll.png"
              height="55"
              alt="klimatkoll Logo"
              loading="lazy"
             
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className=" mb-2 mb-lg-0 " style={{  color: 'white',  marginLeft: '20%' }}>
              <Nav.Link as={Link} to="/globalTemperatur" style={{ color: 'white' }}>Global temperatur</Nav.Link>
              <Nav.Link as={Link} to="/Havsnivå" style={{ color: 'white' }}>Havsnivå</Nav.Link>
              <Nav.Link as={Link} to="/Glaciärer" style={{ color: 'white' }}>Glaciärer</Nav.Link>
              <Nav.Link as={Link} to="/quizstart" style={{ color: 'white' }}>Quiz</Nav.Link>
              <Nav.Link as={Link} to="/utmaningar"  style={{ color: 'white' }}>Utmaningar</Nav.Link>
            </Nav>

            <div  style={{ marginLeft: '20%', color: 'white' }}>
              <NavDropdown
                title={<NavbarProfileImage userId={user?.uid} />}
                id="navbarDropdownMenuAvatar" className="nav-link"
              >
                <NavDropdown.Item as={Link} to="/profil" >Min profil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login" >
                  Logga ut</NavDropdown.Item>
              </NavDropdown>
            </div>
       
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
};

export default NavBar;


