/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import Header from '../../components/Header/index.js'
import MobileSolutions from '../../components/MobileSolutions/index'
import SmartHome from '../../components/SmartHome/index'
import HowItWorksButton from '../../components/HowItWorksButton/index'
import FeaturedOn from '../../components/FeaturedOn/index'
import ColoredContainer from '../../components/ColoredContainer/index'
import ContactUs from '../../components/ContactUs/index'
import { HoneyCoDarkGray, HoneyCoLightGray } from '../../constants'
import HomeBackground from './static/home-background.jpg'

const headerText = {
  firstText: 'A smart decision for',
  secondText: 'independent living',
  subText: 'Shaping the future of unRetirement.',
  button: 'Meet HoneyCo',
}

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Header background = {HomeBackground} headerText = {headerText}/>
        <MobileSolutions/>
        <SmartHome/>
        <HowItWorksButton/>
          <ColoredContainer backgroundColor={HoneyCoLightGray} textColor={HoneyCoDarkGray} divider={false}>
          <h5 style={{ textAlign: 'center' }}>Featured On</h5>
          <FeaturedOn/>
        </ColoredContainer>
        <ContactUs/>
      </div>
    )
  }
}
