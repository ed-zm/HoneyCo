import React from 'react'
import { shallow } from 'enzyme'
import HoneyCoDivider from '../index'
import { HoneyCoBlue } from '../../../constants'

describe('<HoneyCoDivider />', () => {
  it('It should render the HoneyCoDivider Component', () => {
    const wrapper = shallow(<HoneyCoDivider backgroundColor = {HoneyCoDivider} color = {HoneyCoDivider}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
