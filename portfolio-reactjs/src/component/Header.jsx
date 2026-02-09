import { NavLink } from "react-router-dom";

import '../css/Header.css'

function Header() {
  return (
    <header className='header'>
      <h1>JOHN DOE</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/legal">Mentions légales</NavLink>
    </header>

  )
}

export default Header
