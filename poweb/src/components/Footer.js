import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {SocialMedia} from './SocialMedia';

import styled from 'styled-components';


const Styles = styled.div`
    h3, h5, h6 {
        color: white;
        font-weight: bold;
    }

    a {
        color: #a3a3a9 !important;
        font-size: 1.2rem;
        -o-transition:color .2s ease-out, background 1s ease-in;
        -ms-transition:color .2s ease-out, background 1s ease-in;
        -moz-transition:color .2s ease-out, background 1s ease-in;
        -webkit-transition:color .2s ease-out, background 1s ease-in;
        transition:color .2s ease-out, background 1s ease-in;
    }

    a:hover {
        color: #5755c3 !important;
    }
`;

const Featured = styled.div`
    background-color: #1f2126;
`;

const CustomLink = (props) => (
    <div style = {{marginTop: 15}}>
        <a href = {props.link}>{props.children}</a>
    </div>
)


export const Footer = (props) => {
    return (
        <Styles>
            <Featured>
                <Container style = {{paddingTop: 70, paddingBottom: 30}}>
                    <Row>
                        <Col md={4} style = {{paddingLeft: '7%', marginTop: 30, paddingRight: 0, lineHeight: '64px'}}>
                            <h3 style = {{marginBottom: 20}}>PO-SHEN LOH</h3>
                            <SocialMedia></SocialMedia>
                        </Col>
                        <Col md = {4} style = {{paddingLeft: '7%', marginTop: 30}}>
                            <h5 style = {{marginBottom: 25}}>Further Information</h5>
                            <CustomLink link = "/about">About</CustomLink>
                            <CustomLink link = "/news">News</CustomLink>
                            <CustomLink link = "/events">Events</CustomLink>
                            <CustomLink link = "/posts">Posts</CustomLink>
                        </Col>
                        <Col md = {4} style = {{paddingLeft: '7%', marginTop: 30}}>
                            <h5 style = {{marginBottom: 25}}>Innovations</h5>
                            <CustomLink link = "https://www.expii.com">Expii</CustomLink>
                            <CustomLink link = "https://daily.poshenloh.com">Daily Challenge</CustomLink>
                            <CustomLink link = "/quadratic">Quadratics</CustomLink>
                            <CustomLink link = "https://www.math.cmu.edu/~ploh/docs.shtml">Research</CustomLink>
                        </Col>
                    </Row>
                    <Row style = {{marginTop: 60}}>
                        <Col md = {12} align = 'center'>
                            <h6>2019 Expii, Inc.</h6>
                        </Col>
                    </Row>
                </Container>
            </Featured>
        </Styles>)
}
