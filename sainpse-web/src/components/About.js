import React from 'react';
import '../styles/About.css';
import {Row, Col, Container} from 'react-bootstrap';
import Card from './Card.js';




class About extends React.Component {

    render() {
        return (
            <section className="slider" id="tab-graphql">
                <h1>About</h1>
                <Container fluid> 
                        <Row>
                        <p className="aboutText">The Sainpse Institute strives to safely utilize recent advancements in artificial intelligence research to produce tools and products that will augment our individual and collective capacity, with the intent to fully explore the positive potential of pratical applications for all major breakthroughs in the field of AI.
                        </p>
                        <p className="aboutText"> Problems in AI are often posed in terms of matching or surpassing human performance: beating humans at chess, Go or medical diagnoses; This is mainly because we concieve them as problem solving machines, something like an oracle that we can ask questions and get answer from. While that is very important. Our focus is on building systems that are measured in how much they make us better at what we already do. We think of it as a cognitive technology that can expand the range of  human thought and skill, as much as the the invention of writing introduced us to new modes of thought and expression.</p>
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-brands fa-gg-circle fa-spin fa-2x cardIcon"
                                header="Taylor" 
                                text="With the support of Taylor our fully automated trading agent, people with no financial markets experience can now have a chance to make a consistent stream of income. "
                                footer="Note: Taylor's initial release will only be available for a limited number of individuals. "/>
                          </Col> 
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-brands fa-gg-circle fa-spin fa-2x cardIcon"
                                header="Taylor" 
                                text="With the support of Taylor our fully automated trading agent, people with no financial markets experience can now have a chance to make a consistent stream of income. "
                                footer="Note: Taylor's initial release will only be available for a limited number of individuals. "/>
                          </Col>
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-brands fa-gg-circle fa-spin fa-2x cardIcon"
                                header="Taylor" 
                                text="With the support of Taylor our fully automated trading agent, people with no financial markets experience can now have a chance to make a consistent stream of income. "
                                footer="Note: Taylor's initial release will only be available for a limited number of individuals. "/>
                          </Col> 
                          <Col xs={12} sm={12} lg={3} xl={3}  className="sa-col">
                            <Card 
                                icon="fa-brands fa-gg-circle fa-spin fa-2x cardIcon"
                                header="Taylor" 
                                text="With the support of Taylor our fully automated trading agent, people with no financial markets experience can now have a chance to make a consistent stream of income. "
                                footer="Note: Taylor's initial release will only be available for a limited number of individuals. "/>
                          </Col>
                        </Row>
                </Container>


            </section>
        )
    }
}

export default About;
