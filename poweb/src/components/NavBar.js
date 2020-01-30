import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #4542be;
        min-height: 80px;
        font-family: 'Montserrat', sans-serif;
        padding-right: 30px;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: white;
        font-weight: 900;
    }
    
    .navbar-brand {
        margin-left: 30px;
        font-size: 25px;
        text-align: center;
    }

    .nav-item .nav-link {
        font-size: 18px;
        color: white;
        margin-left: 8px;
        margin-right: 8px;
        text-align: center;
        font-weight: 200;
    }

    /* change the color of active or hovered links */
    .navbar .nav-item.active .nav-link,
    .navbar .nav-item:hover .nav-link {
        color: rgba(255,255,255,.4);
    }

    .navbar-toggle:link {
        margin-left: 10px;
    }

    .nav-link.active {
        font-weight: 500;
        text-shadow: 0px 1px, 1px 0px, 1px 1px;;
        color: white !important;
    }

    .navbar .navbar-brand:hover, 
    .navbar .navbar-brand:focus {
        color: white !important;
    }
`;


export const NavBarCustom = (props) => {
    return (
        <Styles>
            <Navbar expand='lg' variant="dark">
                <Navbar.Brand href = '/' >PO-SHEN LOH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ml-auto' activeKey={props.location.pathname}>
                        <Nav.Item><Nav.Link href = "/">HOME</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "/about">ABOUT</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "/news">NEWS</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "/events">EVENTS</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "/posts">POSTS</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "https://www.math.cmu.edu/~ploh/cmu.shtml">CMU</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href = "/contact">CONTACT</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}