/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { makeSelectLocale } from './selectors'

export const LanguageProvider = (props) =>
  <IntlProvider
    locale={props.locale} key={props.locale}
    messages={props.messages[props.locale]}
  >
    {React.Children.only(props.children)}
  </IntlProvider>

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

LanguageProvider.defaultProps = {
  locale: 'en',
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale }),
)

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider)
