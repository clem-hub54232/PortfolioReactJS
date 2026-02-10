import Page from '../component/Page'
import { Accordion } from 'react-bootstrap';
import '../css/Legale.css'

function Legal() {
    return (
        <>
            <Page
                title={"Mentions légales"}
            >
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Editeur du site</Accordion.Header>
                        <Accordion.Body>
                            John Doe
                            <div className="adresse">
                                <i className="bi bi-map"></i>
                                <span>40 rue Laure Diebold</span>
                            </div>
                            <div className="adresse">
                                <i className="bi bi-geo-alt"></i>
                                <span>69009 Lyon, France</span>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <span>10 20 30 40 50</span>
                            </div>
                            <div className="adresse">
                                <i className="bi bi-envelope-at"></i>
                                <span>johon.doe@gmail.com</span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur</Accordion.Header>
                        <Accordion.Body>
                            <div className="hebergeur">
                                <h2>alwaysdata</h2>
                            </div>
                            <p>91 Rue du Faubour Saint-Honoré, 75008 Paris</p>
                            <div className="adresse">
                                <i className="bi bi-globe"></i>
                                <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Crédit</Accordion.Header>
                        <Accordion.Body>
                            <div className="credit">
                                <h2>Crédits</h2>

                            </div>
                            <p> Ce site a été réaliser pas John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation </a> </p>
                            <p> Les images utilisées sur ce site sont libre de droits et ont été obtenues sur le site  <a href="https://pixabay.com/images/search/">Pixbay</a> </p>
                            <p>La favicon de ce site a été fournie pas <a href="https://www.flaticon.com/">John Doe Icons ersellt von Freepik-flation</a> </p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Page></>
    )
}

export default Legal