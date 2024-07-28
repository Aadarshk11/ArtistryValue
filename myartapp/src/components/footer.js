import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About this project </h5>
            <p>
              made by aadarsh kasturey as a self project to learn MERN technology. To know more about this direct to readme file of this github repository.
            </p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/" className="text-white">About</Link></li>
              <li><Link to="/" className="text-white">Services</Link></li>
              <li><Link to="/" className="text-white">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact me</h5>
            <address>
              
              <a href="https://www.linkedin.com/in/aadarshhistory" className="text-white">Linkedin</a><br />
              
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; completed on 28/07/2024 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}