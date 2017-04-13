import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { HoneyCoBlueRGBA, HoneyCoRed, HoneyCoDarkGray, HoneyCoYellow } from '../../constants'

const StyledContainer = styled.div`
  height: 768px;
  width: 100%;
  background: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
`

const StyledContainerTransparency = styled.div`
  height: 768px;
  width: 100%;
  background-color: ${HoneyCoBlueRGBA(0.6)};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 3em;
`

const StyledTitle = styled.span`
  display: block;
  font-size: 50px;
  color: ${HoneyCoRed};
  margin-bottom: 0.5em;
`

const StyledParagraph = styled.p`
  width: 60%;
  font-size: 30px;
  color: white;
  margin-bottom: 1em;
`

const StyledButton = styled.button`
  font-family: Oswald;
  font-size: 26px;
  background-color: ${HoneyCoYellow};
  color: ${HoneyCoDarkGray};
  padding: .2em;
  border-radius: 5px;
  border: none;
  padding: .3em 1.5em;
  text-align: center;
  margin-top: 10px;
`

const WhatIsUnretirement = (props) =>
  <StyledContainer background = {props.background}>
    <StyledContainerTransparency>
      <Container>
        <StyledTitle>{props.text.title}</StyledTitle>
        <StyledParagraph>{props.text.firstParagraph}</StyledParagraph>
        <StyledParagraph>{props.text.secondParagraph}</StyledParagraph>
        <StyledButton>{props.text.button}</StyledButton>
      </Container>
    </StyledContainerTransparency>
  </StyledContainer>

export default WhatIsUnretirement
