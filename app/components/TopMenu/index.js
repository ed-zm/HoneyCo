/**
 *
 * TopMenu
 *
 */

import React from 'react';
import { Link } from 'react-router';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import { HoneyCoBlue, HoneyCoDarkGray, HoneyCoYellow } from '../../constants';


import HorizLogoLockup from './static/logo-horiz-white@0.5x.png';

const StyledNavbar = styled(Navbar)`
  background-color: ${HoneyCoBlue};
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const BiggerNavbarToggler = styled(NavbarToggler)`
  .navbar-toggler-icon {
    height: 2em;
    width: 2em;
  }
`;

const WhiteNavLink = styled(NavLink)`
  color: white !important;
  &.active {
    color: ${HoneyCoYellow} !important;
  }
`;

const BuyNowButton = styled(NavLink)`
  background-color: ${HoneyCoYellow};
  color: ${HoneyCoDarkGray} !important;
  text-align: center;
`;

class TopMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { menuItems, ctaButton } = this.props;

    return (
      <StyledNavbar toggleable="md" light>
        <BiggerNavbarToggler right onClick={this.toggle} />
        <NavbarBrand tag={Link} to="/">
          <img src={HorizLogoLockup} width={215} height={46} alt="HoneyCo Homes" />
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-2" navbar>
            {
              menuItems.map((item) =>
                <NavItem key={item.name}>
                  <WhiteNavLink tag={Link} to={item.route} activeClassName="active">{item.name}</WhiteNavLink>
                </NavItem>,
              )
            }
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <BuyNowButton
                tag={Link} className="rounded" to={ctaButton.route}
                onClick={ctaButton.onClick}
              >{ctaButton.name}</BuyNowButton>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

TopMenu.propTypes = {
  menuItems: React.PropTypes.array,
  ctaButton: React.PropTypes.object,
};

TopMenu.defaultProps = {
  menuItems: [{ name: 'Full Service', route: '/caring-things' },
    { name: 'unRetirement', route: '/unretirement' },
    { name: 'Better Together', route: '/partners' },
    { name: 'Family Members', route: '/blog' }],
  ctaButton: { route: '/', name: 'I\'ve decided' },
};

export default TopMenu;
