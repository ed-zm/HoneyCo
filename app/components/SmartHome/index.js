import React from 'react'
import { Row, Container } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoDarkGray } from '../../constants'
import SmartHomeBackground from './static/smart-home.jpg'
import Icon1 from './static/icons/icon1.png'
import Icon2 from './static/icons/icon2.png'
import Icon3 from './static/icons/icon3.png'
import Icon4 from './static/icons/icon4.png'
import Icon5 from './static/icons/icon5.png'

const StyledRow = styled(Row)`
  height: 768px;
  background: url(${SmartHomeBackground});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 3em;
  border-top: 15px solid ${HoneyCoDarkGray};
  margin: 0;
`
const StyledTitle = styled.span`
  color: ${HoneyCoDarkGray};
  display: block;
  font-size: 50px;
  text-align: center;
  width: 100%;
`
const FloatingText = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 20px;
  padding: 1em;
  color: white;
  width: 280px;
  background-color: gray;
  text-align: justify;
  letter-spacing: -0.3px;
  line-height: 25px;
  @media(max-width: 1199px){
    display: none;
  }
`
const FloatingTextHeader = styled.span`
  font-weight: bold;
  font-size: 21px;
  display: block;
  text-align: left;
`
const StyledIconsContainer = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
`
const StyledIconContainer = styled.div`
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255,255,255, 0.7);
  &:hover{
    background-color: rgba(255,255,255, 1);
    height: 230px;
    width: 230px;
    transition: width 1s height 1s background-color 1s;
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: calc(50% - 48px);
  left: calc(50% - 50px);
`

const StyledIcon = styled.img`
  text-align: center;
  height: 100px;
  width: 100px;
  vertical-align: bottom;
`

const SmartHome = () =>
  <StyledRow>
    <Container>
      <Row>
        <StyledTitle>A Smart Home is a Safe Home</StyledTitle>
        <FloatingText>
          <FloatingTextHeader>
            HoneyCo homes has you covered.
          </FloatingTextHeader>
          <br/>
            We review hundreds of devices
            to deliver you the best in class
            hardware for you and your home.
            We also install and mantain the
            system so you have a worry-free
            experience.
        </FloatingText>
        <StyledIconsContainer>
          <StyledIconContainer top = '20%' left = '30%'>
            <IconWrapper>
            <StyledIcon src = {Icon1}/>
            </IconWrapper>
          </StyledIconContainer>
          <StyledIconContainer top = '10%' left = '60%'>
            <IconWrapper>
            <StyledIcon src = {Icon2}/>
            </IconWrapper>
          </StyledIconContainer>
          <StyledIconContainer top = '50%' left = '80%'>
            <IconWrapper>
            <StyledIcon src = {Icon3}/>
            </IconWrapper>
          </StyledIconContainer>
          <StyledIconContainer top = '80%' left = '55%'>
            <IconWrapper>
            <StyledIcon src = {Icon4}/>
            </IconWrapper>
          </StyledIconContainer>
          <StyledIconContainer top = '75%' left = '20%'>
            <IconWrapper>
            <StyledIcon src = {Icon5}/>
            </IconWrapper>
          </StyledIconContainer>
        </StyledIconsContainer>
      </Row>
    </Container>
  </StyledRow>

export default SmartHome
