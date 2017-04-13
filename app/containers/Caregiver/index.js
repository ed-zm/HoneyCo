import React from 'react'
import { Row } from 'reactstrap'
import styled from 'styled-components'
import ResidentBox from '../../components/ResidentBox/index'
import Header from '../../components/Header/index'
import Image1 from './static/image1.jpg'
import Image2 from './static/image2.jpg'
import Image3 from './static/image3.jpg'
import HeaderBackground from './static/header-background.jpg'
import text from './texts'
import { HoneyCoRed } from '../../constants'

const StyledRow = styled(Row)`
  margin: 0;
  padding: 0;
`
const headerText = {
  firstText: 'Confidence in their',
  secondText: 'decision to stay at home.',
  subText: 'A way street to unRetirement.',
  button: 'Show me more',
}
const Resident = () =>
  <StyledRow>
    <Header background = {HeaderBackground} headerText = {headerText}/>
    <ResidentBox color = {false} background={true} text={false} image={Image1}/>
    <ResidentBox color = {true} background={false} text={text.textOne} textColor={HoneyCoRed}/>
    <ResidentBox color = {true} background={false} text={text.textTwo} textColor={HoneyCoRed}/>
    <ResidentBox color = {false} background={true} text={false} image={Image2}/>
    <ResidentBox color = {false} background={true} text={false} image={Image3}/>
    <ResidentBox color = {true} background={false} text={text.textThree} textColor={HoneyCoRed}/>
  </StyledRow>
export default Resident
