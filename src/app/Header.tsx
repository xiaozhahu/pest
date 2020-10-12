import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import deskIcon from '../../public/icon/desk.png';

function Header() {
    return (
        <Container className="header">
            <Row className="justify-content-md-center">
                <Col xs="6" lg="2" className="header-logo">
                    <a href="index.html">
                        <img src={deskIcon} style={{width: '3rem'}} />
                    </a>
                </Col>
                <Col xs="6" lg="2" className="header-location">
                    <i className="icon-clock"></i>
                    <p>开放时间</p>
                    <span>8:00AM ~ 6:00PM</span>
                </Col>
                <Col xs="6" lg="2" className="header-location">dsadsads</Col>
                <Col xs="6" lg="4" className="header-right">dsadsadsadsdsads</Col>
            </Row>
        </Container>
    );
}

export default Header;
