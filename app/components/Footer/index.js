/**
 *
 * Footer
 *
 */

import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Col, Row } from 'reactstrap'
import styled from 'styled-components'

import { HoneyCoDarkBlue, HoneyCoDarkGray, HoneyCoLightGray } from '../../constants'
import AppStoreBadge from './static/apple-app-store-badge.svg'
import PlayStoreBadge from './static/google-play-store-badge.svg'
import ColoredContainer from '../ColoredContainer/index'

const CopyrightRow = styled(Row)`
  background: ${HoneyCoLightGray};
  padding: 30px 0;
  text-align: center;
  color: ${HoneyCoDarkGray};
  font-size: 1rem;
`

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding-left: 1.28571429em;
    text-indent: -1.28571429em;
  }
  a {
    color: ${HoneyCoDarkBlue};
    line-height: 2;
  }
  
  @media only screen and (max-width: 575px) {
    text-align: center
  }
  
`

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <ColoredContainer backgroundColor="white" textColor={HoneyCoDarkGray} divider={false}>
        <Row>
          <Col xs="12" sm={{ size: '4', offset: '0' }} md={{ size: '4', offset: '3' }}>
            <FooterList>
              <li><FontAwesome fixedWidth name="phone" />(615) 266-5243</li>
              <li><FontAwesome fixedWidth name="home" />331 54th Ave N. <br /> Nashville, TN 37209</li>
              <li><FontAwesome fixedWidth name="envelope" /><a href="mailto:info@honeyco.com">info@honeyco.com</a></li>
            </FooterList>
          </Col>

          <Col xs="12" sm={{ size: '4', offset: '2' }} md={{ size: '4', offset: '0' }}>
            <FooterList>
              <li><a href="https://www.facebook.com/honeycohomes">
                <FontAwesome fixedWidth name="facebook-official" />&nbsp;Facebook
              </a></li>
              <li><a href="https://twitter.com/honeycohomes">
                <FontAwesome fixedWidth name="twitter" />&nbsp;Twitter
              </a></li>
              <li><a href="https://www.instagram.com/honeycohomes/">
                <FontAwesome fixedWidth name="instagram" />&nbsp;Instagram
              </a></li>
              <li><a href="https://angel.co/honeyco-homes">
                <FontAwesome fixedWidth name="angellist" />&nbsp;AngelList
              </a></li>
            </FooterList>
          </Col>
        </Row>
        <CopyrightRow>
          <Col>
            <p>© 2016 HoneyCo Homes, All rights reserved.</p>
            <p>
              <a href="https://play.google.com/store/apps/details?id=com.honeyco.portal&hl=en">
                <img src={PlayStoreBadge} alt="Google Play Store" width="135" height="40" />
              </a>
              <a href="https://itunes.apple.com/us/app/honeyco/id1177174746">
                <img src={AppStoreBadge} alt="Apple App Store" width="135" height="40" />
              </a>
            </p>
            <p>
              <a href="privacypolicy.html">Privacy Policy</a>
              &nbsp;|&nbsp;
              <a href="terms.html">Terms of Service</a>
            </p>
          </Col>
        </CopyrightRow>
      </ColoredContainer>
    )
  }
}

Footer.propTypes = {}

export default Footer
