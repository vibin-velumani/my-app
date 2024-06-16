import React from "react";
import Container from 'react-bootstrap/Container';
import '../css/Header.css'; // Ensure this matches your file structure
import  Nav  from "react-bootstrap/Nav";

import { Navigate } from "react-router-dom";  

const Header = () => {
  return (
    <Container>
      <nav className="head">Header</nav>
      <Nav.Link onClick={()=>{Navigate('/Signup')}} className="head-att"> Signup </Nav.Link>
      <div className="head"> login</div>
    </Container>
  );
};

export default Header;
