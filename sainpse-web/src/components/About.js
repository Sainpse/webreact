import React from 'react';
import '../styles/About.css';
import {Row, Col, Container} from 'react-bootstrap';
import Card from './Card.js';




class About extends React.Component {

    render() {
        return (
            <section className="slider lightBackground" id="tab-graphql">
                <h1>About</h1>
                <Container fluid> 
                        <Row>
                        <p className="aboutText">The Sainpse Institute strives to safely utilize recent advancements in artificial intelligence research to produce tools and products that will augment our individual and collective capacity, with the intent to fully explore the positive potential of pratical applications for all major breakthroughs in the field of AI.
                        </p>
                        <p className="aboutText"> Problems in AI are often posed in terms of matching or surpassing human performance: beating humans at chess, Go or medical diagnoses; This is mainly because we concieve them as problem solving machines, something like an oracle that we can ask questions and get answer from. While that is very important. Our focus is on building systems that are measured in how much they make us better at what we already do. We think of it as a cognitive technology that can expand the range of  human thought and skill, as much as the the invention of writing introduced us to new modes of thought and expression.</p>
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-solid fa-user-shield fa-2x cardIcon"
                                header="Safety" 
                                text="Committment in creating products that safe and fair to use, and driving the broad and diverse adoption of such products across all industries and cultures. "
                                cardStyle="card cardDark"
                                cardContainerStyle="cardcontainer cardContainerDark"
                                headerStyle="cardHeader"/>
                          </Col> 
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-solid fa-mobile-button fa-2x cardIcon"
                                header="Application" 
                                text="
                                Dedication in applying research advancements in AI to create useful products.
                                Reveal  and explore the full pontential of machine intelligence driven products to the public, so that everyone can experience and experiment with new advances in research."
                                cardStyle="card cardAccent"
                                cardContainerStyle="cardcontainer cardContainerAccent"
                                headerStyle="cardHeader cardHeaderDark"/>
                          </Col>
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-solid fa-book-bookmark fa-2x cardIcon"
                                header="Research" 
                                text="
                                Researching impactful potential applications
                                 Contributing to AI research
                                Assesing and preventing potential misuse"
                                cardStyle="card cardDark"
                                cardContainerStyle="cardcontainer cardContainerDark"
                                headerStyle="cardHeader"/>
                          </Col> 
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-solid fa-building-columns fa-2x cardIcon"
                                header="Education" 
                                text="
                                Educating the public about the field and its pontetial use & dangers
                                Discerning highly technical research through simplification"
                                cardStyle="card cardAccent"
                                cardContainerStyle="cardcontainer cardContainerAccent"
                                headerStyle="cardHeader cardHeaderDark"/>
                          </Col>
                        </Row>
                </Container>


            </section>
        )
    }
}

export default About;
