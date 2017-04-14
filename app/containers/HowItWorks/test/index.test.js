import React from 'react'
import { shallow } from 'enzyme'
import HowItWorks from '../index'

describe('<HowItWorks />', () => {
  it('It should render the HowItWorks Component', () => {
    const wrapper = shallow(<HowItWorks/>)
    expect(wrapper).toMatchSnapshot()
  })
})
