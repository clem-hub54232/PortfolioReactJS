import '../css/Header.css'

function Header() {
  return (
    <header className='header'>
    <h1>JOHN DOE</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/legal">Mentions légales</a>
      </nav>
    </header>
  )
}

export default Header
