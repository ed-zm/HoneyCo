import React from 'react'
import styled from 'styled-components'
import { HoneyCoBlueRGBA, HoneyCoYellow, HoneyCoDarkGray } from '../../constants'

const StyledJumbotron = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
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
  display: flex;
  align-items: center;
  justify-content: center;
`

const JumbotronContainer = styled.div`
  padding: 1rem;
  color: white;
  text-weight: 700;
  
  // MAKE CHANGES BELOW TO PUT TEXT/BUTTONS ON TOP OF THE JUMBOTRON
  h1 {
    font-size: 1.5rem;
  }
  
  @media (min-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 1200px) {
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
  color: ${HoneyCoDarkGray};
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

const Header = (props) =>
  <StyledJumbotron background = {props.background}>
    <StyledJumbotronTransparency>
      <JumbotronContainer w="topLeft">
        <StyledTextJumbotron>{props.headerText.firstText}</StyledTextJumbotron>
        <StyledTextJumbotron>{props.headerText.secondText}</StyledTextJumbotron>
        <StyledSubTextJumbotron>{props.headerText.subText}</StyledSubTextJumbotron>
        <StyledButtonJumbotronContainer>
          <StyledButtonJumbotron>
            {props.headerText.button}
          </StyledButtonJumbotron>
        </StyledButtonJumbotronContainer>
      </JumbotronContainer>
    </StyledJumbotronTransparency>
  </StyledJumbotron>

export default Header
