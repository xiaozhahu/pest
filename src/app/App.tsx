import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Container, Row, Col} from 'react-bootstrap';

import './App.scss';

function App() {
    return (
        <header>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2" className="header-logo"></Col>
                    <Col xs lg="2" className="header-location"></Col>
                    <Col xs lg="2" className="header-location"></Col>
                    <Col xs lg="4" className="header-right"></Col>
                </Row>
            </Container>
        </header>
    );
}

export default hot(App);
