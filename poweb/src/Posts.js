import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {CustomJumbotron} from './components/CustomJumbotron';
import {Footer} from './components/Footer';
import {CustomCard} from './components/CustomCard';
import ImgHeader from './assets/back_posts.jpg';
import ImgPost20191013 from './assets/post/post_20191013.jpg';

const Styles = styled.div`
    .row {
        margin-left: 0px;
        margin-right: 0px;
        font-family: 'Montserrat', sans-serif;
    }

    .col {
        text-align: center;
    }
`;

export const Posts = () => {
    return (
        <Styles>
            <CustomJumbotron bgimage={ImgHeader}>Posts</CustomJumbotron>
            <div style = {{ backgroundColor: '#cfcfcf'}}>
                <Container style = {{paddingTop: 30, paddingBottom: 70}} >
                    <Row>
                        <CustomCard subTitle = 'October 13, 2019'
                                    title = 'A Simple Proof of the Quadratic Formula'
                                    image = {ImgPost20191013}
                                    link = "/quadratic">
                        </CustomCard>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </Styles>
    );
}
