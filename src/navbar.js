import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";

function RightNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/components/navbar/">Home</Nav.Link>
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/components/navbar/">Features</Nav.Link>
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/components/navbar/">Pricing</Nav.Link>
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/components/navbar/">About</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RightNavBar;