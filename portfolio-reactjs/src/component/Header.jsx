import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import '../css/Header.css'

function Header() {
  return (
    <Row className="header">
      <Col sm={8} lg={7} md={7}>
        <h1>JOHN DOE</h1>
      </Col>
      <Col className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/legal">Mentions légales</NavLink>
      </Col>
    </Row>


  )
}

export default Header
