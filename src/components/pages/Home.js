import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../../img/Logo.jpg';



export const Home = () => (
    <div className="Home">
        <Container>
            <Row>
                <Col>
                    <img src={Logo} alt=""/>
                </Col>
                <Col>
                    <div className="content">
                        <h1>Hello, I'm Alisina</h1>
                        <h2>Welcome to my new resume page I hope you enoy it.</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

 