import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import mylogo from "./img/logo.PNG";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //here we used state to save the search phrase by the user

  return (
    <div>
    <Navbar variant="dark" className="d-flex justify-content-between fixed-top text-white" style={{ backgroundColor: '#3E5682' }}>

      {/*here is the title on the header*/}
      <div>
      <Link as={Link} to="/content/all" className=" hover-overlay d-flex justify-content-between" style={{ textDecoration: 'none' }}>
            <img className= "mx-2" src={mylogo} style={{ height: "50px" }}></img>
        <h1 className="text-white" >Quest Qisar Hotel</h1>
        </Link>
      </div>

      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {/*We need Link for React router. however here we have "NavLink". To convert it to Link component we have user "as" keyword here. */}
        {/*here is the links the left side of the header*/}
        <Nav.Link as={Link} to="/content/all">
          All Hotel
        </Nav.Link>
        
        <Nav.Link as={Link} to="/about">
          About us
        </Nav.Link>
      </Nav>
      
    </Navbar>


    
    </div>
  );
};
