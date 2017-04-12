import React from 'react'
import styled from 'styled-components'
import { HoneyCoBlueRGBA, HoneyCoYellow } from '../../constants'
import JoelJumbotronImage from './static/home.jpg'

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
      font-size: 1.5rem;
    }
  }
  @media (min-width: 768px) {
    top: 40px;
    left: 40px;
    h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    top: 40px;
    left: 100px;
    h1 {
      font-size: 2.5rem;
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
  @media (max-width: 576px) {
    font-size: 30px;
  }
@media (max-width: 768px) {
    font-size: 40px;
  }
@media (max-width: 992px) {
    font-size: 70px;
  }
@media (max-width: 1200px) {
    font-size: 80px;
  }
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

const Header = () =>
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

export default Header
