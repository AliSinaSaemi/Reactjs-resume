import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../img/Logo.jpg';





export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <Row>
                        <Col>
                            <img src={Logo} alt=""/>
                        </Col>
                        <Col>
                            <HomeContent>
                                <h1>Hello, I'm Alisina</h1>
                                <h2>Welcome to my new resume page, hope you enoy it.</h2>
                            </HomeContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}



const HomeContent = styled.div`
    h1 {
        color: #fdd700;
    }
    h2 {
        font-weight: 400;
    }
    margin-top: 35%;
    border-left: 8px solid #fff;
    padding-left: 15px;
    overflow: hidden;
`;
