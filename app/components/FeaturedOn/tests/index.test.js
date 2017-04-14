import React from 'react'
import { shallow } from 'enzyme'
import FeaturedOn from '../index'

describe('<FeaturedOn />', () => {
  it('It should render the FeaturedOn Component', () => {
    const wrapper = shallow(<FeaturedOn/>)
    expect(wrapper).toMatchSnapshot()
  })
})
