/**
 *
 * MobileConvertibleTabWindow
 *
 */

import classnames from 'classnames';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import styled from 'styled-components';
import { HoneyCoBlue, HoneyCoDarkGray, HoneyCoLightGray } from '../../constants';
import ColoredContainer from '../ColoredContainer/index';

const BetterNavLink = styled(NavLink)`
  color: ${HoneyCoDarkGray} !important;
  background-color: ${HoneyCoLightGray};
  border-top-right-radius: .75rem !important;
  border-top-left-radius: .75rem !important;
  height: 100%;
`;

class MobileConvertibleTabWindow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '0',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={768}>
          <ColoredContainer backgroundColor={HoneyCoBlue} textColor="white">
            <Nav tabs className="nav-fill">
              {
                this.props.titles.map((title, index) =>
                  <NavItem key={title}>
                    <BetterNavLink
                      className={classnames({ active: this.state.activeTab === `${index}` })}
                      onClick={() => {
                        this.toggle(`${index}`);
                      }}
                    >{title}</BetterNavLink>
                  </NavItem>,
                )}
            </Nav>

            <TabContent activeTab={this.state.activeTab} style={{ backgroundColor: 'white' }}>
              {
                this.props.children.map((child, index) =>
                  // suboptimal key, but we don't have anything else to put here
                  // eslint-disable-next-line react/no-array-index-key
                  <TabPane tabId={`${index}`} key={index}>
                    {child}
                  </TabPane>,
                )}
            </TabContent>
          </ColoredContainer>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767}>
          {
            this.props.titles.map((title, index) =>
              <ColoredContainer
                divider={index !== 0}
                // eslint-disable-next-line react/no-array-index-key
                key={index} backgroundColor={this.props.backgroundColors[index]}
                textColor={this.props.textColors[index]}
              >
                {this.props.children[index]}
              </ColoredContainer>,
            )}
        </MediaQuery>
      </div>
    );
  }
}

MobileConvertibleTabWindow.propTypes = {
  titles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  backgroundColors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  textColors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default MobileConvertibleTabWindow;
