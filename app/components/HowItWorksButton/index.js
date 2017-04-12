import React from 'react'
import styled from 'styled-components'
import { HoneyCoYellow } from '../../constants'

const StyledButton = styled.button`
  font-family: Oswald;
  font-size: 26px;
  background-color: ${HoneyCoYellow};
  padding: .2em;
  border-radius: 5px;
  border: none;
  padding: .3em 1.5em;
  text-align: center;
`
const StyledDiv = styled.div`
  background-color: #EFEFEF;
  width: 100%;
`
const StyledButtonContainer = styled.div`
  text-align: center;
  padding: 1.5em;
`
const HowItWorksButton = () =>
  <StyledDiv>
    <StyledButtonContainer>
      <StyledButton>See how it works</StyledButton>
    </StyledButtonContainer>
  </StyledDiv>

export default HowItWorksButton
