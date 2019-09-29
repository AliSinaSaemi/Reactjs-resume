import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Bio = () => (
    <Container>
        <Text>
            <h1>Hi There ...</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam placeat beatae commodi eum ut, provident, porro maxime excepturi laborum mollitia laudantium natus fugit, aspernatur ducimus exercitationem voluptas maiores cumque.
            </p>
        </Text>
    </Container>
)

const Text = styled.div`
    text-align: center;
    padding: 50px;
    p {
        font-size: 20px;
        margin-top: 20px;
    }
`;
