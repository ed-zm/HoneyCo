/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import PropTypes from 'prop-types'
import TopMenu from '../../components/TopMenu/index'

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    children: [],
  }
  render () {
    return (
      <div>
        <TopMenu/>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}
