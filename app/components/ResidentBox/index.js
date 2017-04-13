import React from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoLightGray, HoneyCoDarkGray, HoneyCoYellow } from '../../constants'
const StyledCol = styled(Col)`
  background: url(${(props) => props.background});
  background-color: ${(props) => props.background};
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2em;
  position: relative;
`
const StyledTitleText = styled.span`
  font-size: 40px;
  display: block;
  color: ${(props) => props.textColor};
  text-align: left;
  margin-bottom: 1em;
`
const StyledParagraph = styled.span`
  display: block;
  text-align: left;
  color: ${HoneyCoDarkGray};
  font-size: 22px;
  margin-bottom: 1em;
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
const StyledList = styled.span`
  display: block
`

const ResidentBox = (props) =>
    <StyledCol xl={6} lg={6} md={12} sm={12} xs={12} background={props.background ? props.image : HoneyCoLightGray} color={props.color ? HoneyCoLightGray : ''}>
      <StyledTitleText textColor={props.textColor}>
        {props.text ? props.text.title : ''}
      </StyledTitleText>
      <StyledParagraph>
        {props.text ? props.text.firstParagraph : ''}
      </StyledParagraph>
      <StyledParagraph>
        {props.text ? props.text.secondParagraph : ''}
      </StyledParagraph>
      <StyledParagraph>
        {props.text ? props.text.thirdParagraph : ''}
      </StyledParagraph>
      <StyledParagraph>
        {props.text.list ? props.text.list.map((item) =>
          <StyledList>- {item}</StyledList>
        )
        : ''
        }
      </StyledParagraph>
      {props.text
      ? <StyledButton>{props.text.button}</StyledButton>
      : ''
      }
    </StyledCol>
export default ResidentBox
