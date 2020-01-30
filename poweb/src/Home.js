import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ImgHeader from './assets/back_home.jpg';
import ImgPoFace from './assets/poface.png';
import ImgCollage from './assets/pocollage.png';
import styled from 'styled-components';

import {Footer} from './components/Footer';
import {SocialMedia} from './components/SocialMedia';

import ImgCBS from './assets/logo_news_cbs.png';
import ImgForbes from './assets/logo_news_forbes.png';
import ImgNPR from './assets/logo_news_npr.png';
import ImgNewYorkTimes from './assets/logo_news_nyt.png';
import ImgWashingtonPost from './assets/logo_news_wapo.png';


const Styles = styled.div`
    .jumbotron {
        background: url(${ImgHeader}) no-repeat;
        background-size: cover;
        color: white;
        height: 500px;
        position: relative;
        border-radius: 0 !important;
        margin-bottom: 0;
        padding-top: 60px;
    }

    .image-link {
        margin-top: 45px;
        margin-bottom: 45px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
        display: block;
    }

    .row {
        margin-left: 0px;
        margin-right: 0px;
        font-family: 'Montserrat', sans-serif;
    }

    .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
        background-color: #5755c3;
        border-color: #5755c3;
        width: 200px;
        height: 50px;
        border-radius: 30px;
        font-weight: bold;
    }

    .visitExpii {
        margin-top: 20px;
    }

    .readbio, .readbio:hover {
        border-color: white;
    }

    a {
        color: white;
        text-decoration: none;
    }
    
    a:hover {
         color: white; 
         text-decoration:none; 
         cursor:pointer;  
    }
`;

const Featured = styled.div`
    background-color: #e3e3e8;
`;

const Video = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25;
    height: 0;
`;

const ImageLink = (props) => (
  <div className="image-link">
    <a href={props.href}>
      <img src={props.image} alt=""></img>
    </a>
  </div>
);

const redirect = (url) => {
    window.location.href=url;
}


export const Home = () => {
    return (
        <Styles>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col lg={7} md={10} style = {{marginTop: 70}}>
                            <h1 style = {{fontWeight: 900, marginBottom: 30}}>Po-Shen Loh: Magnetizing Mathematics</h1>
                            <p>Connect with Po</p>
                            <SocialMedia></SocialMedia>
                        </Col>
                        <Col className = 'd-none d-lg-block' lg={5} md={7}>
                            <img className="img-responsive" src = {ImgPoFace} alt=""></img>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Featured>
                <Row>
                    <ImageLink image={ImgCBS} href="https://www.cbsnews.com/news/americas-best-young-math-minds-compete-in-rio/"></ImageLink>
                    <ImageLink image={ImgForbes} href="https://www.forbes.com/sites/oracle/2015/06/02/next-gen-educational-tools-deliver-a-big-dose-of-fun/"></ImageLink>
                    <ImageLink image={ImgNPR} href="https://www.npr.org/sections/thesalt/2015/03/14/392589847/pi-day-isnt-just-magical-its-mathematics-and-theres-pie"></ImageLink>
                    <ImageLink image={ImgNewYorkTimes} href="https://www.nytimes.com/2019/08/21/science/math-equation-triangles-pemdas.html"></ImageLink>
                    <ImageLink image={ImgWashingtonPost} href="https://www.washingtonpost.com/news/answer-sheet/wp/2016/07/18/u-s-students-win-prestigious-international-math-olympiad-for-second-straight-year/"></ImageLink>
                </Row>
            </Featured>
            <Container style = {{paddingTop: 40, paddingBottom: 80}}>
                <Row>
                    <Col lg = {6} md={12} style = {{marginTop: 65, paddingRight: 30}}>
                        <h2 style = {{fontWeight: 900}}>Innovator and Creator</h2>
                        <p>Po-Shen Loh believes that anything is possible, even reinventing learning. 
                            He founded Expii, an innovative learning platform where students have 
                            the power to choose how they learn. Expii is a social enterprise that 
                            provides free creative and novel lessons to the world to make education
                             and intellectual curiosity accessible to all. 
                        </p>
                        <Button onClick={() => redirect('https://expii.com/')} 
                            variant="primary" 
                            className = 'visitExpii'>
                            Visit Expii
                        </Button>
                    </Col>
                    <Col className = 'd-none d-sm-block' sm={12} md={12} lg={4} style = {{marginTop: 50}}>
                        <img src = {ImgCollage} alt=""></img>
                    </Col>
                </Row>
            </Container>
            <Featured style = {{backgroundColor: '#5755c3'}}>
                <Container style = {{paddingTop: 55, paddingBottom: 80}}>
                    <Row>
                        <Col xs = {12} sm={12} md={12} lg={6} style = {{marginTop: 30, paddingRight: 30}}>
                            <Video>
                                <iframe
                                    title="myFrame"
                                    style={{position: "absolute", top: 0, 
                                            left: 0, width: "100%", height: "100%"}}
                                    src={`https://www.youtube.com/embed/RLjobWWkfnI`}
                                    frameBorder="0"
                                />
                            </Video>
                        </Col>
                        <Col lg = {6} md={12} style = {{marginTop: 40, color: 'white'}}>
                            <h2 style = {{fontWeight: 900}}>Educator and Coach</h2>
                            <p>Po-Shen has been a math professor at Carnegie
                                Mellon University since 2010, and the National Coach of the winning USA
                                International Mathematical Olympiad team since 2014. Through travel,
                                collaboration, and intellectual curiosity, he uncovers math in unexpected
                                places in our everyday lives.  His unconventional attitude informs his
                                holistic approach to education and drives him to teach students of all
                                levels, backgrounds, and ages. As an in-demand innovative teacher, he
                                shares mathematics with the world through his public lectures, the Daily
                                Challenge with Po-Shen Loh, and through Expii.
                            </p>
                            <Button onClick={() => redirect('/about')} 
                                    variant="primary" 
                                    className = 'readbio'>
                                        Read Bio
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Featured>
            <Container style = {{paddingTop: 40, paddingBottom: 80}}>
                <Row>
                    <Col lg = {6} md={12} style = {{marginTop: 50, paddingRight: 30}}>
                        <h2 style = {{fontWeight: 900}}>Academic & Researcher</h2>
                        <p>Po-Shen’s academic career focuses on original discovery in the areas of 
                            combinatorics, probability theory, and computer science. He has published
                             numerous papers in academic journals and was recognized by the 2018 United
                              States Presidential Early Career Award for Scientists and Engineers. 
                              His style of making high-level concepts accessible to a variety of 
                              learning levels is what draws audiences to his presentations, and he 
                              has been invited to share his insights in 14 countries over the past decade.
                        </p>
                        <Button onClick={() => redirect('https://www.math.cmu.edu/~ploh/cmu.shtml')} 
                            variant="primary" 
                            className = 'visitExpii'>
                            Visit CMU Page
                        </Button>
                    </Col>
                    <Col xs = {12} sm={12} md={12} lg={6} style = {{marginTop: 80, paddingLeft: 30}}>
                        <Video>
                            <iframe
                                title="myFrame"
                                style={{position: "absolute", top: 0, 
                                        left: 0, width: "100%", height: "100%"}}
                                src={`https://www.youtube.com/embed/5pjnRjDNlyE`}
                                frameBorder="0"
                            />
                        </Video>
                    </Col>
                </Row>
            </Container>
            <Featured style = {{backgroundColor: '#5755c3'}}>
                <Container style = {{paddingTop: 60, paddingBottom: 80}}>
                    <Row>
                        <Col xs = {12} sm={12} md={12} lg={6} style = {{marginTop: 30, paddingRight: 30}}>
                            <Video>
                                <iframe
                                    title="myFrame"
                                    style={{position: "absolute", top: 0, 
                                            left: 0, width: "100%", height: "100%"}}
                                    src={`https://www.youtube.com/embed/NttsYtPXsIk`}
                                    frameBorder="0"
                                />
                            </Video>
                        </Col>
                        <Col lg = {6} md={12} style = {{marginTop: 40, color: 'white'}}>
                            <h2 style = {{fontWeight: 900}}>Daily Challenge</h2>
                            <p>Loh is inventing a new approach to teaching
                                advanced creative mathematical thinking to middle school students. The
                                Daily Challenge is designed to be a fun and systematic tour of middle
                                school competition math, designed for beginners. Through an original
                                teaching style that develops creative thinking, students will discover the
                                rich world of math that they can build from their foundation.
                            </p>
                            <Button onClick={() => redirect('https://daily.poshenloh.com')}
                                    variant="primary" 
                                    className = 'readbio'>
                                        Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Featured>
            <Footer></Footer>
        </Styles>
    );
}
