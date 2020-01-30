import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {CustomJumbotron} from './components/CustomJumbotron';
import {Footer} from './components/Footer';
import ImgCollage from './assets/pocollage.png';
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

export const About = () => {
    return (
        <Styles>
            <CustomJumbotron bgimage={ImgHeader}>ABOUT</CustomJumbotron>
            <Container style = {{paddingTop: 20, paddingBottom: 80}}>
                <Row>
                    <Col lg={6} md={12} style = {{marginTop: 65, paddingRight: 30}}>
                        <h2 style = {{fontWeight: 'bold', marginBottom: 20}}>Biographical Sketch</h2>
                        <PStyled>
Po-Shen Loh is a social entrepreneur, working across the full spectrum of
      mathematics and education, all around the world. He is the founder of the
      free personalized learning platform <a
      href="https://www.expii.com">expii.com</a>, a social enterprise supported
      by his <a href="https://daily.poshenloh.com">series of online math
      courses</a> that reinvent the middle school math curriculum with a focus
      on creative thinking. He is also a math professor at Carnegie Mellon
      University and the national coach of the USA International Mathematical
      Olympiad team.
                        </PStyled>
                        <PStyled>
As an academic, Po-Shen has earned distinctions ranging from an International
      Mathematical Olympiad silver medal to the <a
      href="https://www.whitehouse.gov/briefings-statements/president-donald-j-trump-announces-recipients-presidential-early-career-award-scientists-engineers/">United States Presidential
      Early Career Award for Scientists and Engineers</a>. His scientific
      research considers a variety of questions that lie at the intersection of
      combinatorics (the study of discrete systems), probability theory, and
      computer science.  As an educator, he was the coach of Carnegie Mellon
      University’s math team when it achieved its <a
      href="https://www.cmu.edu/news/stories/archives/2017/april/putnam-mathematics-competition.html">first-ever
      #1 rank</a> among all North American universities, and the coach of the
      USA Math Olympiad team when it achieved its <a
      href="https://www.cbsnews.com/news/americas-best-young-math-minds-compete-in-rio/">first-ever
      back-to-back #1-rank victories</a> in 2015 and 2016, and then again in
      2018 and 2019.  His research and educational outreach takes him to cities
      across the world, reaching over 10,000 people each year through public
      lectures and events, and he has <a
      href="https://www.youtube.com/playlist?list=PLqv4sKOD1bsUoSs-SbzlA2BE1tML4A33u">featured
      in or co-created videos totaling over 5 million YouTube views</a>.
                        </PStyled>
                        <PStyled>
                            Po-Shen received his undergraduate degree in
      mathematics from <a
      href="https://www.caltech.edu/about/news/caltech-student-receives-multiple-prestigious-graduate-honors-827">Caltech</a> in 2004, graduating first in his class. He received a master’s degree
      in mathematics from the University of Cambridge in 2005, where he was
      supported by a Winston Churchill Foundation Scholarship. He continued
      his studies at <a
      href="https://paw.princeton.edu/article/professor-and-coach-po-shen-loh-10-challenges-rising-mathematicians">Princeton</a>,
      supported by a <a
      href="https://hertzfoundation.org/fellows/fellow-profile/10187/Po-Shen-Loh">Hertz
      Foundation Fellowship</a> and a National Science Foundation Graduate
      Research Fellowship, where he completed his Ph.D. in mathematics at
      the end of 2009, and has been on the faculty at Carnegie Mellon
      University ever since.
                        </PStyled>
                    </Col>
                    <Col className = 'd-none d-sm-block' sm={12} md={12} lg={4} style = {{marginTop: 100}}>
                        <img src = {ImgCollage} alt=""></img>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Styles>
    );
}
