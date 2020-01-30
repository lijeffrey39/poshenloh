import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';


const Styles = styled.div`
    height: 310px;
    width: 320px;
    margin: 0 auto;
    margin-top: 50px;
    cursor:pointer;
`;

const CustomImage = styled.div`
    background: url(${props => props.image}) no-repeat;
    background-size: cover;
    height: 190px;
    width: 320px;
    border-radius: 8px 8px 0px 0px;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
`;

const CustomTitle = styled.div`
    padding: 25px;
    padding-left: 20px;
    height: 150px;
    background-color: white;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
`;

const redirect = (props) => {
    if (props.isLink) {
        return;
    }
    window.location.href = props.link;
}

export const CustomCard = (props) => {
    return (
        <Col xl={4} lg={6} md={6} className = 'justify-content-start' style = {{paddingLeft: 0, paddingRight: 0}}>
            <Styles onClick={e => redirect(props)}>
                <CustomImage image = {props.image}></CustomImage>
                <CustomTitle>
                    <h6 style = {{fontSize: '14px'}}>{props.subTitle}</h6>
                    <a style = {{fontSize: '18px', fontWeight: 900, color: 'black'}} href = {props.link}>{props.title}</a>
                </CustomTitle>
            </Styles>
        </Col>
    );
}
