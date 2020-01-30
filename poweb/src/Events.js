import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {CustomJumbotron} from './components/CustomJumbotron';
import {Footer} from './components/Footer';
import {CustomCard} from './components/CustomCard';
import ImgHeader from './assets/back_events.jpg';
import ImgEvent20191014 from './assets/event/event_20191014.jpg';
import ImgEvent20191015 from './assets/event/event_20191015.jpg';
import ImgEvent20191022 from './assets/event/event_20191022.jpg';
import ImgEvent20191027 from './assets/event/event_20191027.jpg';
import ImgEvent20191104 from './assets/event/event_20191104.jpg';
import ImgEvent20191109 from './assets/event/event_20191109.jpg';
import ImgEvent20191116 from './assets/event/event_20191116.jpg';
import ImgEvent20191117 from './assets/event/event_20191117.jpg';
import ImgEvent20191208 from './assets/event/event_20191208.jpg';


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


export const Events = () => {
    return (
        <Styles>
            <CustomJumbotron bgimage={ImgHeader}>Events</CustomJumbotron>
            <div style = {{ backgroundColor: '#cfcfcf'}}>
                <Container style = {{paddingTop: 30, paddingBottom: 70}} >
                    <Row>
                        <CustomCard subTitle = 'Oct 14, 2019'
                                    title = 'Long Island, NY'
                                    link = "https://www.eventbrite.com/e/magic-dice-by-prof-po-shen-loh-long-island-oct-14th-2019-tickets-75759273025"
                                    image = {ImgEvent20191014}>
                        </CustomCard>
                        <CustomCard subTitle = 'Oct 15, 2019'
                                    title = 'Queens College, NY'
                                    link = "https://www.qc.cuny.edu/Academics/Honors/Time2000/Pages/default.aspx"
                                    image = {ImgEvent20191015}
                                    >
                        </CustomCard>
                        <CustomCard subTitle = 'Oct 22, 2019'
                                    title = 'NEST+m, NY'
                                    link = "https://nestmk12.net"
                                    image = {ImgEvent20191022}
                                    size = "small">
                        </CustomCard>
                        <CustomCard subTitle = 'Oct 27, 2019'
                                    title = 'Houston, TX'
                                    isLink = "false"
                                    image = {ImgEvent20191027}
                                    size = "small">
                        </CustomCard>
                        <CustomCard subTitle = 'Nov 4, 2019'
                                    title = 'Washington, DC'
                                    isLink = 'false'
                                    image = {ImgEvent20191104}>
                        </CustomCard>
                        <CustomCard subTitle = 'Nov 9, 2019'
                                    title = 'Harvard'
                                    link = "https://www.hmmt.co"
                                    image = {ImgEvent20191109}>
                        </CustomCard>
                        <CustomCard subTitle = 'Nov 16, 2019'
                                    title = 'Princeton'
                                    link = "https://jason-shi-f9dm.squarespace.com/"
                                    image = {ImgEvent20191116}>
                        </CustomCard>
                        <CustomCard subTitle = 'Nov 17, 2019'
                                    title = 'Berkeley'
                                    link = "https://bmt.berkeley.edu/"
                                    image = {ImgEvent20191117}>
                        </CustomCard>
                        <CustomCard subTitle = 'Dec 8, 2019'
                                    title = 'San Diego'
                                    link = "http://www.sdmathcircle.org/"
                                    image = {ImgEvent20191208}>
                        </CustomCard>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </Styles>
    );
}
