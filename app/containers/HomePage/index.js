/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import ColoredContainer from '../../components/ColoredContainer/index';
import Footer from '../../components/Footer/index';
import MobileConvertibleTabWindow from '../../components/MobileConvertibleTabWindow/index';
import { HoneyCoBlue, HoneyCoDarkGray, HoneyCoLightGray, HoneyCoRed, HoneyCoYellow } from '../../constants';

import JoelJumbotronImage from './static/home-jumbotron.jpg';
import FirstTabImage from './static/home-tab1-image.png';
// import SecondTabImage from './static/home-tab2-image.jpg';
import ThirdTabImage from './static/home-tab3-image.png';
import SecondSectionImage from './static/home-section2-image.png';

import FeaturedCNET from './static/featured/cnet.png';
import FeaturedAdamCarolla from './static/featured/adam-carolla-show.png';
import FeaturedCrains from './static/featured/crains.png';
import FeaturedNashvilleBusinessJournal from './static/featured/nashville-business-journal.svg';
import FeaturedStandingWithHope from './static/featured/standing-with-hope.jpg';
import FeaturedTechCo from './static/featured/tech-co.png';
import FeaturedWGNRadio from './static/featured/wgn-radio.png';
import FeaturedBusinessNewsDaily from './static/featured/business-news-daily.svg';


const StyledJumbotron = styled.div`
  background-image: url(${JoelJumbotronImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 49.08%; /* (img-height / img-width * 100) */
  position: relative;
`;

const JumbotronContainer = styled.div`
  position: absolute;
  padding: 1rem;
  color: white;
  text-weight: 700;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  
  // MAKE CHANGES BELOW TO PUT TEXT/BUTTONS ON TOP OF THE JUMBOTRON
  top: 0;
  left: 0;
  h1 {
    font-size: 1.5rem;
  }
  
  @media (min-width: 576px) {
    top: 0;
    left: 0;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 768px) {
    top: 40px;
    left: 40px;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 992px) {
    top: 40px;
    left: 100px;
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 1200px) {
    top: 80px;
    left: 200px;
    h1 {
      font-size: 4rem;
    }
`;

const TabTextContentDiv = styled.div`

color: "white";
margin: 0px;

@media (min-width: 768px) {
  color: ${HoneyCoDarkGray};
  margin: 15px;
}
`;

const FeaturedCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
`;

const FeaturedCardWrapper = styled.div`
  margin: 20px 10px;
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.7;
  }
`;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <StyledJumbotron src={JoelJumbotronImage}>
          <JumbotronContainer w="topLeft">
            <h1>I&apos;ve got it <br />
              handled</h1>
          </JumbotronContainer>
        </StyledJumbotron>

        <MobileConvertibleTabWindow
          titles={['It\'s handled', 'It\'s better', 'It\'s something else']}
          backgroundColors={[HoneyCoBlue, HoneyCoLightGray, 'white']}
          textColors={['white', HoneyCoDarkGray, HoneyCoDarkGray]}
        >
          <Row>
            <Col xs="12" sm="7">
              <TabTextContentDiv>
                <h2>Look after yourself and your home with HoneyCo</h2>
                <p>Combine personal responsibility with home security. HoneyCo delivers the latest to show you can
                    take care of yourself.</p>
                <Button style={{ backgroundColor: HoneyCoYellow, display: 'block', margin: 'auto' }}>Take
                    charge</Button>
              </TabTextContentDiv>
            </Col>
            <Col xs="12" sm="5" style={{ textAlign: 'center' }}>
              <img src={FirstTabImage} height="250" style={{ margin: '15px' }} alt="App Screenshot" />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <TabTextContentDiv>
                <h2>Influence the future</h2>
                <p>The long-term residential living options aren&apos;t great. Your participation creates a better
                    option for everyone.</p>
                <p>HoneyCo provides something different. Something that we think is better</p>
                <Button style={{ backgroundColor: HoneyCoYellow, display: 'block', margin: 'auto' }}>See how</Button>
              </TabTextContentDiv>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="7">
              <TabTextContentDiv>
                <h2>Beyond leisure</h2>
                <p>unRetirement is personal. HoneyCo connects you to opportunities of engagement in a variety of
                    areas.</p>
                <Button style={{ backgroundColor: HoneyCoYellow, display: 'block', margin: 'auto' }}>Dive in</Button>
              </TabTextContentDiv>
            </Col>
            <Col xs="12" sm="5" style={{ textAlign: 'center' }}>
              <img src={ThirdTabImage} height="250" style={{ margin: '15px' }} alt="HoneyCo opportunities" />
            </Col>
          </Row>
        </MobileConvertibleTabWindow>

        <ColoredContainer backgroundColor={HoneyCoRed} textColor="white" divider={false}>
          <Row>
            <Col xs="12" sm="7">
              <h2>A welcome addition to a tough conversation</h2>
              <p>HoneyCo&apos;s JULIE alerts family members of home emergencies. Your loved ones are cared for.</p>
              <Button style={{ backgroundColor: HoneyCoYellow, display: 'block', margin: 'auto' }}>Discover how</Button>
            </Col>
            <Col xs="12" sm="5" style={{ textAlign: 'center' }}>
              <img src={SecondSectionImage} height="250" style={{ margin: '15px' }} alt="App Screenshot" />
            </Col>
          </Row>
        </ColoredContainer>
        <ColoredContainer backgroundColor={HoneyCoLightGray} textColor={HoneyCoDarkGray} divider={false}>
          <h5 style={{ textAlign: 'center' }}>Featured On</h5>
          <FeaturedCards>
            <FeaturedCardWrapper>
              <img src={FeaturedCNET} width="200" alt="CNET" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedAdamCarolla} width="200" alt="The Adam Carolla Show" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedCrains} width="200" alt="Crain's" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedNashvilleBusinessJournal} width="200" alt="Nashville Business Journal" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedStandingWithHope} width="200" alt="Standing with Hope" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedTechCo} width="200" alt="Tech Co" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedWGNRadio} width="200" alt="WGN Radio" />
            </FeaturedCardWrapper>
            <FeaturedCardWrapper>
              <img src={FeaturedBusinessNewsDaily} width="200" alt="Business News Daily" />
            </FeaturedCardWrapper>
          </FeaturedCards>
        </ColoredContainer>
        <Footer />
      </div>
    );
  }
}
