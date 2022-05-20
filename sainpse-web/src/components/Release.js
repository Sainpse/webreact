import React from 'react';
import '../styles/Release.css';
import '../animation/card.js';
import {Row, Col, Container} from 'react-bootstrap';
import Card from './Card.js';


class Release extends React.Component {

    render() {
        return (
            <div>
                <section className="slider darkBackground" id="tab-pwa">
                    <h1>Projects Roadmap</h1>
                    <Container fluid> 
                        <Row>
                          <Col xs={12} sm={12} lg={12} xl={12}  className="sa-col">
                            <Card 
                                icon="fa-brands fa-gg-circle fa-spin fa-2x cardIcon"
                                header="Taylor" 
                                text="With the support of Taylor our fully automated trading agent, people with no financial markets experience can now have a chance to make a consistent stream of income. "
                                footer="Note: Taylor's initial release will only be available for a limited number of individuals. "
                                cardStyle="card cardDark"
                                cardContainerStyle="cardcontainer cardContainerDark"
                                headerStyle="cardHeader"/>
                          </Col> 
                        </Row>
                    </Container>
                          
                </section>
            </div>
        )
    }
}

export default Release;