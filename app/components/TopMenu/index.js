/**
 *
 * TopMenu
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Container, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'
import { HoneyCoBlueRGBA, HoneyCoYellow, HoneyCoDarkGray, HoneyCoLightGray } from '../../constants'
import HorizLogoLockup from './static/logo-horiz-white@0.5x.png'

const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => HoneyCoBlueRGBA(0.7)};
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
  position: relative;
  padding: 0em .2em;
  font-size: 26px;
  font-weight: lighter;
  &:hover{
    margin-bottom: -5px;
    border-bottom: 5px solid white;
  }
`

const StyledDropdown = styled.div`
  left: 0;
  bottom: 100;
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 12;
  display: ${(props) => props.display};
`
const StyledDropdownList = styled.ul`
  -webkit-padding-start: 0px;
`

const StyledDropdownItem = styled.li`
  text-align: center;
  padding: .5em;
  font-size: 20px;
  list-style: none;
  color: ${HoneyCoDarkGray};
  background-color: ${HoneyCoLightGray};
  border: 2px solid ${HoneyCoDarkGray};
  &:hover{
    color: white;
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

const StyledDropdownLink = styled(Link)`
  color: ${HoneyCoDarkGray} !important;
  &:hover, &:focus{
    text-decoration: none;
    color: white !important;
  }
  
`

class TopMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.state = {
      isOpen: false,
      dropdownHover: false,
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  handleHover (e) {
    this.setState({dropdownHover: !this.state.dropdownHover})
  }
  render () {
    const { menuItems } = this.props
    const dropdown = (listItems) =>
      <StyledDropdown display = { this.state.dropdownHover ? 'block' : 'none'}>
        <StyledDropdownList>
          {listItems.map((listItem, i) =>
            <StyledDropdownItem key = {i}>
              <StyledDropdownLink to = {listItem.route}>{listItem.name}</StyledDropdownLink>
            </StyledDropdownItem>
          )}
        </StyledDropdownList>
      </StyledDropdown>

    return (
      <StyledNavbar toggleable = "md" light>
        <Container>
          <BiggerNavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">
            <img src={HorizLogoLockup} width={215} height={46} alt="HoneyCo Homes" />
          </NavbarBrand>
          <StyledCollapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-2" navbar>
              {
                menuItems.map((item) =>
                  <StyledNavItem key={item.name} onMouseEnter = {item.dropdown ? this.handleHover : ''} onMouseLeave = {item.dropdown ? this.handleHover : ''}>
                    <WhiteNavLink tag={Link} to={item.route ? item.route : '#'} activeClassName="active">
                      {item.name}
                      {item.dropdown ? dropdown(item.dropdown) : ''}
                    </WhiteNavLink>
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
  menuItems: PropTypes.array,
}

TopMenu.defaultProps = {
  menuItems: [
    {
      name: 'Who its for',
      route: false,
      dropdown: [
        {
          name: 'Resident',
          route: '/resident',
        },
        {
          name: 'Caregiver',
          route: '/caregiver',
        },
        {
          name: 'Partnerships',
          route: '/partnerships',
        },
      ],
    },
  { name: 'How it works', route: '/how-it-works', dropdown: false },
  { name: 'Shop', route: '/shop' },
  { name: 'Account', route: '/account', dropdown: false }],
}

export default TopMenu
