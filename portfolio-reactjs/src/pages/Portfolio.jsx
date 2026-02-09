import React, { useState } from 'react'

import '../css/Portfolio.css'

import Page from '../component/Page'
import banner from '../img/banner.jpg'
import freshfood from '../img/fresh-food.jpg'
import restaurantjaponais from '../img/restaurant-japonais.jpg'
import screens from '../img/screens.jpg'
import seo from '../img/seo.jpg'
import coder from '../img/coder.jpg'
import espacebienetre from '../img/espace-bien-etre.jpg'

import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    const items = [
        {
            id: 1,
            title: "Fresh Food",
            subtitle: "Site de vente de produits frais en ligne",
            image: freshfood,
            footer: "Site réalisé avec PHP & MySQL"
        },
        {
            id: 2,
            title: "Restaurant Akira",
            subtitle: "Site de vente de produits frais en ligne",
            image: restaurantjaponais,
            footer: "Site réalisé avec WordPress"
        },
        {
            id: 3,
            title: "Espace bien-être",
            subtitle: "Site de vente de produits frais en ligne",
            image: espacebienetre,
            footer: "Site réalisé avec LARAVEL"
        },
        {
            id: 4,
            title: "SEO",
            subtitle: "Amélioration du referencement  d'un site e-commerce",
            image: seo,
            footer: "Utilisation des outils SEO"
        },
        {
            id: 5,
            title: "Création d'une API",
            subtitle: "création d'une API RESTFULL publique",
            image: coder,
            footer: "PHP-SYMFONY"
        },
        {
            id: 6,
            title: "Maquette d'un site web ",
            subtitle: "Création du prototype d'un site",
            image: screens,
            footer: "Réalisé avec  FIGMA"
        },
        // etc...
    ];
    return (
        <>
            <Page
                bannerSrc={banner}
                title={"Portfolio"}
                subtitle={"Voici quelques unes de mes réalisations"}>
                <Container>
                    <Row>
                        {items.map(item => (
                            <Col sm={12} lg={4} md={4}>
                                <Card className="card" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.subtitle}
                                        </Card.Text>
                                        <Button variant="primary">Voir le site</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{item.footer}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Page>
        </>
    )
}

export default Portfolio