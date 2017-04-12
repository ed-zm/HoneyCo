/**
 *
 * ColoredContainer
 *
 */

import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import HoneyCoDivider from '../HoneyCoDivider/index'

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding-top: ${(props) => props.title || !props.divider ? '15px' : '1px'};
  padding-bottom: 15px;
`

const PrettyHeader = styled.h1`
  text-align: center;
`

class ColoredContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    const { backgroundColor, textColor, title, divider, children } = this.props
    return (
      <StyledContainer fluid backgroundColor={backgroundColor} textColor={textColor} title={title} divider={divider}>
        {title ? <PrettyHeader>{title}</PrettyHeader> : ''}
        {divider ? <HoneyCoDivider color={textColor} backgroundColor={backgroundColor} /> : ''}
        {children}
      </StyledContainer>
    )
  }
}

ColoredContainer.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired,
  textColor: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  divider: React.PropTypes.bool,
}

ColoredContainer.defaultProps = {
  children: null,
  title: '',
  divider: true,
}

export default ColoredContainer
