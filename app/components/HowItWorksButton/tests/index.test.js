import React from 'react'
import { shallow } from 'enzyme'
import HowItWorksButton from '../index'

describe('<HowItWorksButton />', () => {
  it('It should render the HowItWorksButton Component', () => {
    const wrapper = shallow(<HowItWorksButton/>)
    expect(wrapper).toMatchSnapshot()
  })
})
