import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {CustomJumbotron} from './components/CustomJumbotron';
import {Footer} from './components/Footer';
import {CustomCard} from './components/CustomCard';
import ImgHeader from './assets/back_news.jpg';
import ImgNews20150314 from './assets/news/news_20150314.jpg';
import ImgNews20150602 from './assets/news/news_20150602.jpg';
import ImgNews20160718 from './assets/news/news_20160718.jpg';
import ImgNews20170722 from './assets/news/news_20170722.jpg';
import ImgNews20190826 from './assets/news/news_20190826.jpg';

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


export const News = () => {
    return (
        <Styles>
            <CustomJumbotron bgimage={ImgHeader}>News</CustomJumbotron>
            <div style = {{ backgroundColor: '#cfcfcf'}}>
                <Container style = {{paddingTop: 30, paddingBottom: 70}} >
                    <Row>
                        <CustomCard subTitle = 'August 21, 2019 — New York Times' 
                                    title = 'How Many Triangles Are There? Here’s How to Solve the Puzzle'
                                    image = {ImgNews20190826}
                                    link = "https://www.nytimes.com/2019/08/21/science/math-equation-triangles-pemdas.html">
                        </CustomCard>
                        <CustomCard subTitle = 'July 22, 2017 — CBS' 
                                    title = "America's Best Young Math Minds Compete in Rio"
                                    image = {ImgNews20170722}
                                    link = "https://www.cbsnews.com/news/americas-best-young-math-minds-compete-in-rio/">
                        </CustomCard>
                        <CustomCard subTitle = 'July 18, 2016 — Washington Post' 
                                    title = 'U.S. Students Win Prestigious International Math Olympiad'
                                    image = {ImgNews20160718}
                                    link = "https://www.washingtonpost.com/news/answer-sheet/wp/2016/07/18/u-s-students-win-prestigious-international-math-olympiad-for-second-straight-year/">
                        </CustomCard>
                        <CustomCard subTitle = 'June 2, 2015 — Forbes' 
                                    title = 'Next-Gen Educational Tools Deliver A Big Dose Of Fun'
                                    image = {ImgNews20150602}
                                    link = "https://www.forbes.com/sites/oracle/2015/06/02/next-gen-educational-tools-deliver-a-big-dose-of-fun/">
                        </CustomCard>
                        <CustomCard subTitle = 'March 14, 2015 — NPR' 
                                    title = "Pi Day Isn't Just Magical, It's Mathematics. And There's Pie!"
                                    image = {ImgNews20150314}
                                    link = "https://www.npr.org/sections/thesalt/2015/03/14/392589847/pi-day-isnt-just-magical-its-mathematics-and-theres-pie">
                        </CustomCard>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </Styles>
    );
}
