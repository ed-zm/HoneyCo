import React from 'react'
import styled from 'styled-components'
import { Row, Container } from 'reactstrap'
import { HoneyCoLightGray, HoneyCoDarkGray, HoneyCoYellow } from '../../constants'

const StyledDiv = styled.div`
  background-color: #EFEFEF;
  width: 100%;
  padding: 2em;
  padding-bottom: 3em;
  border-bottom: 10px solid ${HoneyCoDarkGray};
`
const StyledTextContainer = styled.div`
  font-size: 20px;
  width: 100%;
`
const StyledFirstText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-weight: bold;
`
const StyledSecondText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  margin: 1em 0;
`
const StyledInputsContainer = styled.div`
  font-size: 20px;
  margin: 0 auto;
  width: 40%;
`
const StyledInput = styled.input`
  font-family: Oswald;
  width: 100%;
  border-radius: 12px;
  border: none;
  height: 50px;
  color: ${HoneyCoLightGray};
  margin: 1em 0;
`
const StyledEmailInput = styled.input`
  font-family: Oswald;
  width: 75%;
  border-radius: 12px 0px 0px 12px;
  border: none;
  height: 50px;
  color: ${HoneyCoLightGray};
`
const StyledButton = styled.button`
  width: 25%;
  font-size: 20px;
  font-family: Oswald;
  display: inline-block;
  vertical-align: bottom;
  height: 50px;
  border-radius: 0px 12px 12px 0px;
  border: none;
  color: white;
  font-wegiht: 500;
  background-color: ${HoneyCoYellow};
`
const ContactUs = () =>
  <StyledDiv>
    <Container>
      <Row>
        <StyledTextContainer>
          <StyledFirstText>Send Us a Message</StyledFirstText>
          <StyledSecondText>Whether you're interested in living in a HoneyCo Home, or just want periodic updates, we'd love to hear from you.</StyledSecondText>
        </StyledTextContainer>
        <StyledInputsContainer>
          <StyledInput placeholder = '  How can we help you?'/>
          <StyledEmailInput placeholder = ' Enter your email'/>
          <StyledButton>SUBMIT</StyledButton>
        </StyledInputsContainer>
      </Row>
    </Container>
  </StyledDiv>

export default ContactUs
