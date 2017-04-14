import { shallow } from 'enzyme'
import React from 'react'
import HomePage from '../index'

describe('<HomePage />', () => {
  it('should render HomePage Component', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
})
