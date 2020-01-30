import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const CustomJumbotron = (props) => {
    const Styles = styled.div`
        .jumbotron {
            background: url(${props.bgimage}) no-repeat;
            background-size: cover;
            background-position: center;
            color: white;
            height: 320px;
            position: relative;
            border-radius: 0 !important;
            margin-bottom: 0;
            padding-top: 60px;
            font-family: 'Montserrat', sans-serif;
        }
    `;

    return (
        <Styles>
            <Jumbotron>
                <h1 style = {{textAlign: 'center', fontWeight: 250, marginTop: 75}}>{props.children}</h1>
            </Jumbotron>
        </Styles>
    )
}
