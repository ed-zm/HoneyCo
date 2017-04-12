import React from 'react'
import { Row } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoDarkGray } from '../../constants'
import SmartHomeBackground from './static/smart-home.jpg'

const StyledRow = styled(Row)`
  height: 768px;
  background: url(${SmartHomeBackground});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 3em;
  border-top: 15px solid ${HoneyCoDarkGray};
`
const StyledTitle = styled.span`
  color: ${HoneyCoDarkGray};
  display: block;
  font-size: 60px;
  text-align: center;
  width: 100%;
`
const FloatingText = styled.span`
  font-size: 20px;
  height: 280px;
  padding: 1em;
  color: white;
  width: 300px;
  background-color: gray;
  text-align: justify;
`
const SmartHome = () =>
  <StyledRow>
    <StyledTitle>A Smart Home is a Safe Home</StyledTitle>
    <FloatingText>
      HoneyCo homes has you covered.
        <br/>
        <br/>
        We review hundreds of devices
        to deliver you the best in class
        hardware for you and your home.
        We also install and mantain the
        system so you have a worry-free
        experience.
    </FloatingText>
  </StyledRow>

export default SmartHome
