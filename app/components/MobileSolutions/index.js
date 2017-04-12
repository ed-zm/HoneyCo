import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoLightGray, HoneyCoDarkGray, HoneyCoYellow } from '../../constants'
import Mobile1 from './static/mobile1.png'
import Mobile2 from './static/mobile2.png'
import Mobile3 from './static/mobile3.png'

const StyledImage = styled.img`
  width: 100%;
`
const StyledTitle = styled.span`
  display: block;
  font-size: 70px;
  text-align: center;
  width: 100%;
  margin-bottom: .5em;
`
const StyledText = styled.span`
  display: block;
  font-size: 30px;
  text-align: center;
  width: 100%;
  
`
const StyledRow = styled(Row)`
  background-color: ${HoneyCoLightGray};
  color: ${HoneyCoDarkGray};
  padding: 1em;
  padding-bottom: 8em;
  margin: 0px;
`
const StyledButton = styled.button`
  font-family: Oswald;
  font-size: 26px;
  background-color: ${HoneyCoYellow};
  padding: .2em;
  border-radius: 5px;
  border: none;
  padding: .3em 1.5em;
  text-align: center;
  margin-top: 10px;
`
const StyledButtonContainer = styled.div`
  text-align: center;
`

const MobileSolutions = () =>
    <StyledRow>
      <Container>
        <Row>
          <StyledTitle>Diferent needs. One Solution.</StyledTitle>
          <Col xl = {4} lg={4} md={12} sm ={12} xs={12} >
            <StyledImage src = {Mobile1}/>
            <StyledText>I want to stay in my home.</StyledText>
            <StyledButtonContainer>
              <StyledButton>Show me how</StyledButton>
            </StyledButtonContainer>
          </Col>
          <Col xl = {4} lg={4} md={12} sm ={12} xs={12} >
            <StyledImage src = {Mobile2}/>
            <StyledText>I want peace of mind.</StyledText>
            <StyledButtonContainer>
              <StyledButton>Show me how</StyledButton>
            </StyledButtonContainer>
          </Col>
          <Col xl = {4} lg={4} md={12} sm ={12} xs={12} >
            <StyledImage src = {Mobile3}/>
            <StyledText>I want to be different</StyledText>
            <StyledButtonContainer>
              <StyledButton>Show me how</StyledButton>
            </StyledButtonContainer>
          </Col>
        </Row>
      </Container>
    </StyledRow>
export default MobileSolutions
