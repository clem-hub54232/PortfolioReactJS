import { useEffect, useState } from 'react';

import { Row, Col, Modal, Button, ProgressBar } from 'react-bootstrap';

import '../css/Home.css'
import image from '../img/john-doe-about.jpg'

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [items, setItems] = useState([]);
  const getItems = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setItems(json);
  }

  useEffect(() => {
    getItems();
  }, [])
  console.log(items)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Bonjour je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <Button variant="danger" onClick={handleShow}>
            En savoir plus
          </Button>

          <Modal show={show} onHide={handleClose} centered data-bs-theme="dark">
            <Modal.Header closeButton>
              <Modal.Title>Mon profil GitHub</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className='profil-github'>
                <Col md={6}>
                  <img src={items.avatar_url} width={200} height={200} />
                </Col>
                <Col md={6}>
                  <div className="profil">
                    <i className="bi bi-person"></i>
                    <span>  <a href={items.html_url} >{items.name} </a></span>
                  </div>
                  <div className="profil">
                    <i className="bi bi-geo-alt"></i>
                    <span></span>
                  </div>
                  <div className="profil">
                    <i className="bi bi-card-text"></i>
                    <span>{items.bio}</span>
                  </div>
                  <div className="profil">
                    <i className="bi bi-box"></i>
                    <span>Repositories : {items.public_repos}</span>
                  </div>
                  <div className="profil">
                    <i className="bi bi-people"></i>
                    <span>Followers : {items.followers}</span>
                  </div>
                  <div className='following'>
                    <i className="bi bi-people"></i>
                    <span>Following : {items.following}</span>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermé
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
      <Row className='home'>
        <Col className="presentation mt-5 mb-5" xs={8}>
          <Col className='p-2'>
            <h4>A propos</h4>
            <hr className="home-divider" />
            <img src={image} width="auto" height={200} />
            <p>Lorem ipsum dolor sit amet consecteur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consecteur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consecteur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>


          </Col>
          <Col className='p-2'>
            <h4>Mes compétences</h4>
            <hr className="home-divider" />
            <span>HTML5 90%</span>
            <ProgressBar className='mb-3' variant="danger" now={90} />
            <span>CSS3 80%</span>
            <ProgressBar className='mb-3' variant="info" now={80} />
            <span>JAVASCRIPT 70%</span>
            <ProgressBar className='mb-3' variant="warning" now={70} />
            <span>PHP 60%</span>
            <ProgressBar className='mb-3' variant="success" now={60} />
            <span>REACT 50%</span>
            <ProgressBar className='mb-3' now={50} />
          </Col>
        </Col>
      </Row>
    </>

  )
}

export default Home
