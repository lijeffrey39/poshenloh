import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BackgroundImage from './../assets/back_home.jpg';
import Container from 'react-bootstrap/Container'


const Styles = styled.div`
    .jumbotron {
        background: url(${BackgroundImage}) no-repeat;
        background-size: cover;
        color: white;
        height: 450px;
        position: relative;
        border-radius: 0 !important;
        margin-bottom: 0;
        padding-top: 60px;
        font-family: 'Montserrat', sans-serif;
    }
`;


export const PostJumbotron = (props) => {
    return (
        <Styles>
            <Jumbotron>
                <Container style = {{paddingLeft: '10%', paddingRight: '5%', paddingTop: '7%'}}>
                    <p style = {{fontSize: '17px', color: '#b8b8b8'}}>{props.date}</p>
                    <h1 style = {{fontWeight: 900, marginTop: 20}}>{props.title}</h1>
                    <h4 style = {{fontWeight: 500, marginTop: 20}}>{props.subTitle}</h4>
                </Container>
            </Jumbotron>
        </Styles>
    )
}
