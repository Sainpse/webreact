import React from 'react';
import '../styles/Contact.css';
import {Row, Col,Container} from 'react-bootstrap';


class Contact extends React.Component {

    render() {
        return (
                <section className="slider lightBackground noOverlap " id="tab-deno">
                    <h1>Contact</h1>
                    <Container className="contactSection">
                        <Row className="centerContact">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}  className="contactInfo">
                                <p>+27 74 9442 626</p>
                            </Col> 
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}  className="contactInfo">
                                <p>marcusm@sainpse.com</p>
                            </Col> 
                        </Row>
                        <Row className="centerContact">
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}  className="socialDiv">
                                <a href="https://github.com/Sainpse">
                                    <i className="fa-brands fa-github fa-2x socialIcon"></i>
                                </a>
                            </Col> 
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}  className="socialDiv">
                                <a href="https://twitter.com/Sainpse">
                                    <i className="fa-brands fa-twitter-square fa-2x socialIcon"></i>
                                </a>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}  className="socialDiv">
                                <a href="https://www.linkedin.com/company/sainpse/">
                                    <i className="fa-brands fa-linkedin fa-2x socialIcon"></i>
                                </a> 
                            </Col>  
                        </Row>
                        <Row className="centerContact">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}  className="contactInfo">
                                <p className="origin">2022 - The Sainpse Institue of Augmented Intelligence</p>
                            </Col> 
                        </Row>
                    </Container>
                </section>
        )
    }
}

export default Contact;