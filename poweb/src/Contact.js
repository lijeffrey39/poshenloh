import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {CustomJumbotron} from './components/CustomJumbotron';
import {Footer} from './components/Footer';
import ImgPo from './assets/poboard.jpg';
import ImgHeader from './assets/back_about.jpg';

const Styles = styled.div`
    .row {
        margin-left: 0px;
        margin-right: 0px;
        font-family: 'Montserrat', sans-serif;
    }
`;

const PStyled = styled.p`
    font-size: 16px !important;
    margin-bottom: 20px;
`;

const PStyledBold = styled.p`
    font-weight: bold;
    display: inline;
`;


export const Contact = () => {
    return (
        <Styles>
            <CustomJumbotron bgimage={ImgHeader}>Contact</CustomJumbotron>
            <Container style = {{paddingTop: 20, paddingBottom: 80}}>
                <Row>
                    <Col lg={6} md={12} style = {{marginTop: 60, paddingRight: 30}}>
                        <h2 style = {{fontWeight: 'bold', fontSize: '40px', marginBottom: 20}}>Connect with Po</h2>
                        <PStyled>Thanks for your interest! To get in touch, please 
                            feel free to use any of these options. Po-Shen Loh unfortunately 
                            is not able to personally respond to every inquiry, but he is 
                            supported by a team which helps to address questions.
                        </PStyled>
                        <PStyled>
                            <PStyledBold>Biweekly Email Newsletter:</PStyledBold> <a href="https://eepurl.com/gExYzT">subscribe</a> <br></br>
                            <PStyledBold>Email:</PStyledBold> support@poshenloh.com <br></br>
                            <PStyledBold>Telephone:</PStyledBold> +1 844 314 1593 <br></br>
                            <PStyledBold>Address:</PStyledBold>  260 Atwood Street, Pittsburgh, PA 15213, USA <br></br>
                            <PStyledBold>WeChat Public Account:</PStyledBold>  罗博深数学 <br></br>
                            <PStyledBold>WeChat Assistant:</PStyledBold>  boshuzhushou1 <br></br>
                        </PStyled>
                    </Col>
                    <Col className = 'd-none d-sm-block' sm={12} md={12} lg={4} style = {{marginTop: 50}}>
                        <img src = {ImgPo} alt=""></img>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Styles>
    );
}
