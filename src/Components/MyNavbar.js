import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { IoMdContact } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Your custom CSS
// import { IoMdContact } from "react-icons/io";
import { Navbar, Button, Container, Nav, Form, Dropdown, Card, Carousel } from 'react-bootstrap';

const MyNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <Navbar expand="sm" className="mx-50px" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand style={{ color: ' rgb(31, 136, 242)', fontSize: '40px', fontWeight: 'bold' }}>
            Connectify
          </Navbar.Brand>
          <Nav className="me-auto my-5 my-lg-0" style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to="home" smooth duration={500} className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="Domain" className="me-3">Courses</Nav.Link>
            <Nav.Link href="register" className="me-3">Groups</Nav.Link>
            <Nav.Link href="#proofs" className="me-3">Quizzes</Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={500} className="me-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="services" smooth duration={500} className="me-3">
              Services
            </Nav.Link>
            {/* <Nav.Link href="Domain" className="me-3">Courses</Nav.Link>
            <Nav.Link href="register" className="me-3">Groups</Nav.Link>
            <Nav.Link href="#proofs" className="me-3">Quizzes</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <div className="search-container me-3">
              <Form.Control
                type="search"
                placeholder="&nbsp;&nbsp;&nbsp;What do you want to learn"
                aria-label="Search"
                className="search-input"
                style={{ width: '250px', height: '40px', marginBottom: '100px', marginRight:'20px'}}
              />
            </div>
            <Dropdown 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
              className="me-3"
            >
              <IoMdContact size="45px" style={{ marginBottom: '-25px', marginLeft: '-20px', color: ' rgb(14, 93, 182)', backgroundColor: 'transparent' }} className='profile' />
              <p style={{color:'white',marginTop:'-35px',fontSize:'20px',marginLeft:'30px'}}>Profile</p>
              <Dropdown.Menu className='dropdown-menu ' style={{backgroundColor:'black'}}>
                <Dropdown.Item>{userId}</Dropdown.Item>
                <Dropdown.Item href="#edit">Edit</Dropdown.Item>
                <Dropdown.Item href="uipage">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Container>
      </Navbar>
  );
};

export default MyNavbar;
