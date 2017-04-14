import React from 'react'
import { shallow } from 'enzyme'
import Header from '../index'

const headerText = {
  firstText: 'First Text',
  secondText: 'Second Text',
  subText: 'Sub text',
  button: 'Button',
}

const background = '/someurl'

describe('<Header />', () => {
  it('It should render the Header Component', () => {
    const wrapper = shallow(<Header background = {background} headerText = {headerText}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
