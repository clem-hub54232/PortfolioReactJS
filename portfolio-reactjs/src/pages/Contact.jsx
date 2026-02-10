import Page from '../component/Page'
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/Contact.css'

function Contact() {
    return (
        <>
            <Page
                title={"Contact"}
                subtitle={"Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."}>
                <Row className='contact'>
                    <Col className="contact-form" xs={8}>
                        <Col className='p-2'>
                            <h4>Formulaire de contact</h4>
                            <hr className="form-divider" />
                            <Form>
                                <Form.Group className="mb-3 me-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control className="mb-3" type="text" placeholder="Votre nom" required/>
                                    <Form.Control className="mb-3" type="email" placeholder="Votre adresse email" required />
                                    <Form.Control className="mb-3" type="text" placeholder="Votre numéro de téléphone" required/>
                                    <Form.Control className="mb-3" type="text" placeholder="Sujet" required/>
                                    <Form.Control className="mb-3" as="textarea" placeholder="Votre message" rows={5} required/>
                                </Form.Group>

                            </Form>
                            <div className='formulaire'>
                                <Button className="mb-3" as="input" type="submit" value="Envoyer" />
                            </div>
                        </Col>
                        <Col className='p-2'>
                            <h4>Mes coordonnées</h4>
                            <hr className="form-divider" />
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
                            <div className='carte mt-2'>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924361!2d4.7964039775894305!3d45.77866197108078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sca!4v1770757327814!5m2!1sfr!2sca"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Page></>
    )
}

export default Contact