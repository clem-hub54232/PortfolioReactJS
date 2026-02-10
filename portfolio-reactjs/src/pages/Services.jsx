import Page from '../component/Page'
import banner from '../img/banner.jpg'
import '../css/Services.css'
import { Card, Container, Row, Col } from 'react-bootstrap';

function Services() {
    const items = [
            {
                id: 1,
                title: "UX Design",
                subtitle: "L'UX Design est une disipline qui consiste à consevoir des produits (sites web, applications mobiles, logiciels, objects connectés, etc.) en plaçant l'utilisateur au centre des préoccupation. L'objectif est de endre l'experiance utilisateur la plus fluide et agréable possible.",
                image: <i class="bi bi-brush"></i>,
            },
            {
                id: 2,
                title: "Developpement web",
                subtitle: "Le développement de sites web consiste à créer des sites inetrnet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, ect.).",
                image: <i class="bi bi-code-slash"></i>,
            },
            {
                id: 3,
                title: "Référencement",
                subtitle: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
                image: <i class="bi bi-search"></i>,
            }
           
    ]

    return (
        <>
            <Page
                bannerSrc={banner}
                title={"Mon offre de service"}
                subtitle={"Voici les prestations sur lesquelles je peux intervenir"}>
                <Container>
                    <Row className='services'>
                        {items.map(item => (
                            <Col sm={12} lg={4} md={4}>
                                <Card className="card" style={{ width: '22rem', height: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='image'>{item.image}</Card.Title>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.subtitle}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Page>
        </>
    )
}

export default Services