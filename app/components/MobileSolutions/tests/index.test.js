import React from 'react'
import { shallow } from 'enzyme'
import MobileSolutions from '../index'

describe('<MobileSolutions />', () => {
  it('It should render the MobileSolutions Component', () => {
    const wrapper = shallow(<MobileSolutions/>)
    expect(wrapper).toMatchSnapshot()
  })
})
