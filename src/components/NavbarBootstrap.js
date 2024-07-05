// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navbar.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
// import logoName from '../photos/logo-name.png';
import logoIcon from '../photos/logo.png';
// //mui
import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

export default function NavbarBootstrap({setMymode}) {
  const theme = useTheme()

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>
            {/* <img src = {logoName} className ="logo-name" alt ="Logo Navbar"/> */}
    <img src = {logoIcon} className ="logo-icon" alt = "Logo Name"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About Us</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action3">Case Studies</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#action4">Blog</Nav.Link>
            <Nav.Link href="#action5"> How it works</Nav.Link>
            <Nav.Link href="#action6"> Hire</Nav.Link>
          </Nav>
          <Form className="d-flex">
  <div className = "contact-btn">
    <button style={{padding:"10px"}}>Contact US</button>

  </div>
          </Form>
          <IconButton sx={{ ml: 1 }} onClick={()=>{
    setMymode(theme.palette.mode==="light"?"dark":"light")
  }}
  color="inherit">
  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

