/**
 *
 * HoneyCoDivider
 *
 */
import React from 'react';
import styled from 'styled-components';
import HoneyCoLogomark from './static/logomark-plain@0.5x.png';

const HoneyCoDivider = styled.hr`
  border-top: 1px solid ${(props) => props.color};
  text-align: center;
  margin: 1.5rem 0;

  &:after {
    content: " ";
    background-color: ${(props) => props.backgroundColor};
    background-image: url(${HoneyCoLogomark});
    background-size: 24px 26px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
    top: -15px;
    
  }
`;

HoneyCoDivider.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
};

export default HoneyCoDivider;
