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

import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import styled from 'styled-components'
import MobileSolutions from '../../components/MobileSolutions/index.js'
import SmartHome from '../../components/SmartHome/index.js'
import ColoredContainer from '../../components/ColoredContainer/index'
import Footer from '../../components/Footer/index'
import { HoneyCoBlue, HoneyCoBlueRGBA, HoneyCoDarkGray, HoneyCoLightGray, HoneyCoRed, HoneyCoYellow } from '../../constants'

import JoelJumbotronImage from './static/home.jpg'
import FirstTabImage from './static/home-tab1-image.png'
// import SecondTabImage from './static/home-tab2-image.jpg';
import ThirdTabImage from './static/home-tab3-image.png'
import SecondSectionImage from './static/home-section2-image.png'
import FeaturedCNET from './static/featured/cnet.png'
import FeaturedAdamCarolla from './static/featured/adam-carolla-show.png'
import FeaturedCrains from './static/featured/crains.png'
import FeaturedNashvilleBusinessJournal from './static/featured/nashville-business-journal.svg'
import FeaturedStandingWithHope from './static/featured/standing-with-hope.jpg'
import FeaturedTechCo from './static/featured/tech-co.png'
import FeaturedWGNRadio from './static/featured/wgn-radio.png'
import FeaturedBusinessNewsDaily from './static/featured/business-news-daily.svg'

const StyledJumbotron = styled.div`
  background-image: url(${JoelJumbotronImage});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  bakground-color: ${HoneyCoBlueRGBA(0.5)};
  width: 100%;
  height: 650px;
  position: relative;
`
const StyledJumbotronTransparency = styled.div`
  background-color: rgba(77, 162, 159, 0.6);
  width: 100%;
  height: 650px;
  position: relative;
`

const JumbotronContainer = styled.div`
  position: absolute;
  padding: 1rem;
  color: white;
  text-weight: 700;
  
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
    top: calc(50% - 230.5px);
    left: calc(50% - 307px);
    h1 {
      font-size: 4rem;
    }
`

const StyledTextJumbotron = styled.span`
  display: block;
  font-size: 80px;
  font-weight: 500;
  text-align: center;
`
const StyledSubTextJumbotron = styled.span`
  display: block;
  font-size: 32px;
  margin: 32px auto;
  text-align: center;
`

const StyledButtonJumbotron = styled.button`
  font-family: Oswald;
  font-size: 32px;
  background-color: ${HoneyCoYellow};
  padding: .2em;
  border-radius: 5px;
  border: none;
  padding: .3em 1.5em;
  text-align: center;
  margin-top: 10px;
`

const StyledButtonJumbotronContainer = styled.div`
  text-align: center;
`

const TabTextContentDiv = styled.div`

color: "white";
margin: 0px;

@media (min-width: 768px) {
  color: ${HoneyCoDarkGray};
  margin: 15px;
}
`

const FeaturedCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
`

const FeaturedCardWrapper = styled.div`
  margin: 20px 10px;
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.7;
  }
`

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <StyledJumbotron src={JoelJumbotronImage}>
          <StyledJumbotronTransparency>
            <JumbotronContainer w="topLeft">
              <StyledTextJumbotron>A smart decision for</StyledTextJumbotron>
              <StyledTextJumbotron>independent living</StyledTextJumbotron>
              <StyledSubTextJumbotron>Shaping the future of unRetirement</StyledSubTextJumbotron>
              <StyledButtonJumbotronContainer>
                <StyledButtonJumbotron>
                  Meet HoneyCo
                </StyledButtonJumbotron>
              </StyledButtonJumbotronContainer>
            </JumbotronContainer>
          </StyledJumbotronTransparency>
        </StyledJumbotron>

        <MobileSolutions/>
        <SmartHome/>
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
    )
  }
}
