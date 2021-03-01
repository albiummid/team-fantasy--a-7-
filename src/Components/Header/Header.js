import React from 'react';
import logo from "../../logo/cover.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Navbar  } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="header">

<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img className=" b-success" src={logo} alt=""/></Navbar.Brand>
    <Nav className="mr-auto  nevi">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
    );
};

export default Header;