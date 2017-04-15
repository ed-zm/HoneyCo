import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { HoneyCoDarkGray, HoneyCoLightGray } from '../../constants'

const StyledContainer = styled(Container)`
  padding-top: 100px;
`

const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
`

const StyledBoxContainer = styled.div`
  height: 650px;
  width: 30%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`

const StyledBox = styled.div`
  color: ${HoneyCoDarkGray};
  width: 100%;
  height: 250px;
  background-color: ${HoneyCoLightGray};
  padding: 1em;
`

const StyledBackgroundContainer = styled.div`
  height: 650px;
  width: 30%;
  background: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
`

const StyledTitle = styled.span`
  font-size: 70px;
  display: block;
  width: 100%;
  text-align: center;
  color: ${HoneyCoDarkGray};
`
const StyledBoxTitle = styled.span`
  font-size: 32px;
  display: block;
  margin-bottom: 1em;
`
const StyledBoxDescription = styled.span`
  font-size: 20px;
  display: block;
  
`

const HowItWorksSection = (props) =>
<StyledContainer>
  <StyledBackground>
    <StyledTitle>Your 24/7 Piece of Mind</StyledTitle>
    <StyledBoxContainer>
      <StyledBox>
        <StyledBoxTitle>{props.text.box1.title}</StyledBoxTitle>
        <StyledBoxDescription>{props.text.box1.description}</StyledBoxDescription>
      </StyledBox>
      <StyledBox>
        <StyledBoxTitle>{props.text.box2.title}</StyledBoxTitle>
        <StyledBoxDescription>{props.text.box2.description}</StyledBoxDescription>
      </StyledBox>
    </StyledBoxContainer>
    <StyledBackgroundContainer background = {props.background}/>
    <StyledBoxContainer>
      <StyledBox>
        <StyledBoxTitle>{props.text.box3.title}</StyledBoxTitle>
        <StyledBoxDescription>{props.text.box3.description}</StyledBoxDescription>
      </StyledBox><StyledBox>
        <StyledBoxTitle>{props.text.box4.title}</StyledBoxTitle>
        <StyledBoxDescription>{props.text.box4.description}</StyledBoxDescription>
      </StyledBox>
    </StyledBoxContainer>
  </StyledBackground>
</StyledContainer>

HowItWorksSection.propTypes = {
  text: PropTypes.object.isRequired,
}
export default HowItWorksSection
