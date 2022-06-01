import React from 'react';
import '../styles/Resources.css';
import '../animation/card.js';
import {Row, Col,Container} from 'react-bootstrap';
import OptionButton from './OptionButton';


class Resources extends React.Component {

    render() {
        return (
            
                <section className="slider darkBackground noOverlap" id="tab-typescript">
                    <h1>Resources</h1>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}  className="sa-col">
                                <OptionButton 
                                    text="Data"
                                    tip="Free data sets for model training"
                                    onClick={() => {window.open("https://www.typescriptlang.org/")}}/>
                            </Col> 
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12}  className="sa-col">
                                <OptionButton 
                                        text="Tools "
                                        tip="AI packages and repos"
                                        onClick={() => {window.open("https://www.typescriptlang.org/")}}/>
                            </Col>
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12}  className="sa-col">
                                <OptionButton 
                                                text="Advances"
                                                tip="Latest AI advances"
                                                onClick={() => {window.open("https://www.typescriptlang.org/")}}/>
                            </Col>
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12}  className="sa-col">
                                <OptionButton 
                                                text="Education"
                                                tip="Education resources"
                                                onClick={() => {window.open("https://www.typescriptlang.org/")}}/>
                            </Col>
                        </Row>
                    </Container>         
                </section>
        )
    }
}

export default Resources;