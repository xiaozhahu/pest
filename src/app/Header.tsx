import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import deskIcon from '../../public/icon/desk.png';

function Header() {
    return (
        <Container className="header">
            <Row className="justify-content-md-center">
                <Col xs="6" lg="4" className="header-logo">
                    <a href="index.html">
                        <img src={deskIcon} style={{width: '3rem'}}  />
                    </a>
                </Col>
                <Col xs="6" lg="2" className="header-location">
                    <i className="icon-clock" />
                    <p>开放时间</p>
                    <span>8:00AM ~ 6:00PM</span>
                </Col>
                <Col xs="6" lg="2" className="header-location">
                    <i className="icon-telphone" />
                    <p>联系方式</p>
                    <span>15850506481</span>
                </Col>
                <Col xs="6" lg="4" className="header-right">
                    <i className="fa fa-pencil" />
                    <i className="fa fa-weixin" />
                    <i className="fa fa-pencil" />
                    <i className="fa fa-pencil" />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
