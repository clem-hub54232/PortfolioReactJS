import '../css/Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Row className="footer">
      <Col lg={4} md={4} className='footer-section'>
        <span className='footer-section-title'>John Doe</span>
        <span>40 rue Laure Diebold</span>
        <span>69009 Lyon, France</span>
        <span>10 20 30 40 50</span>
        <span>johon.doe@gmail.com</span>
        <div className='footer-section-reseaux'>
          <i class="bi bi-github"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </Col>
      <Col lg={3} md={3} className='footer-section'>
        <span className='footer-section-title'>Liens utiles</span>
        {/* <div className='footer-section-links'> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/legal">Mentions légales</NavLink>
        {/* </div> */}
      </Col>
      <Col lg={5} md={5} className='footer-section'>
        <span className='footer-section-title'>Mes dernière réalisation</span>
        <NavLink to="/portfolio">Fresh food</NavLink>
        <NavLink to="/portfolio">Restaurant Akira</NavLink>
        <NavLink to="/portfolio">Espace-bien être</NavLink>
        <NavLink to="/portfolio">SEO</NavLink>
        <NavLink to="/portfolio">Création d'une API</NavLink>
        <NavLink to="/portfolio">Maquette d'un site</NavLink>
      </Col>
    </Row>
  )
}

export default Footer
