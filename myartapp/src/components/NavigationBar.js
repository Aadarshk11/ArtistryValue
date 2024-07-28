import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ArtistryValue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Categories</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {localStorage.getItem("authToken") ? (
              <Nav.Link as={Link} to="/">
                Post your art
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          {!localStorage.getItem("authToken") ? (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <Button variant="success">Login</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                <Button variant="success">Sign Up</Button>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <Button variant="success" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
