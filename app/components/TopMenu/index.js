/**
 *
 * TopMenu
 *
 */

import React from 'react'
import { Link } from 'react-router'
import { Container, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoBlueRGBA, HoneyCoYellow } from '../../constants'

import HorizLogoLockup from './static/logo-horiz-white@0.5x.png'

const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.opacity ? HoneyCoBlueRGBA(1) : HoneyCoBlueRGBA(0)};
  font-size: 26px;
  font-weight: bolder;
  position: fixed;
  padding: 10px 0px;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  transition: background-color 1s;
`

const StyledNavItem = styled(NavItem)`
  padding: 0em .2em;
  font-size: 26px;
  font-weight: lighter;
  &:hover{
    border-bottom: 5px solid white;
  }
`

const StyledCollapse = styled(Collapse)`
  justify-content: flex-end;
`

const BiggerNavbarToggler = styled(NavbarToggler)`
  .navbar-toggler-icon {
    height: 2em;
    width: 2em;
  }
`

const WhiteNavLink = styled(NavLink)`
  color: white !important;
  &.active {
    color: ${HoneyCoYellow} !important;
  }
`

class TopMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.changeBackground = this.changeBackground.bind(this)
    this.state = {
      isOpen: false,
      opacity: false,
    }
  }
  componentWillMount () {
    window.addEventListener('scroll', this.changeBackground)
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  changeBackground () {
    if (window.scrollY !== 0) {
      this.setState({ opacity: true })
    } else {
      this.setState({ opacity: false })
    }
  }

  render () {
    const { menuItems } = this.props

    return (
      <StyledNavbar toggleable = "md" opacity = {this.state.opacity} light>
        <Container>
          <BiggerNavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">
            <img src={HorizLogoLockup} width={215} height={46} alt="HoneyCo Homes" />
          </NavbarBrand>
          <StyledCollapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-2" navbar>
              {
                menuItems.map((item) =>
                  <StyledNavItem key={item.name}>
                    <WhiteNavLink tag={Link} to={item.route} activeClassName="active">{item.name}</WhiteNavLink>
                  </StyledNavItem>,
                )
              }
            </Nav>
          </StyledCollapse>
        </Container>
      </StyledNavbar>
    )
  }
}

TopMenu.propTypes = {
  menuItems: React.PropTypes.array,
  ctaButton: React.PropTypes.object,
}

TopMenu.defaultProps = {
  menuItems: [
    { name: 'Who its for', route: '/who-its-for' },
    { name: 'How it works', route: '/how-it-works' },
    { name: 'Shop', route: '/shop' },
    { name: 'Account', route: '/account' }],
  ctaButton: { route: '/', name: 'I\'ve decided' },
}

export default TopMenu
