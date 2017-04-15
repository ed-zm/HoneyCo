/**
 *
 * ColoredContainer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
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

const ColoredContainer = (props) => {
  const { backgroundColor, textColor, title, divider, children } = props
  return (
    <StyledContainer fluid backgroundColor={backgroundColor} textColor={textColor} title={title} divider={divider}>
      {title ? <PrettyHeader>{title}</PrettyHeader> : ''}
      {divider ? <HoneyCoDivider color={textColor} backgroundColor={backgroundColor} /> : ''}
      {children}
    </StyledContainer>
  )
}

ColoredContainer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  divider: PropTypes.bool,
}

ColoredContainer.defaultProps = {
  children: null,
  title: '',
  divider: true,
}

export default ColoredContainer
