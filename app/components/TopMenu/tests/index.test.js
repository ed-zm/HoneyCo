import React from 'react'
import { shallow } from 'enzyme'
import TopMenu from '../index'

describe('<TopMenu />', () => {
  it('It should render the TopMenu Component', () => {
    const wrapper = shallow(<TopMenu/>)
    expect(wrapper).toMatchSnapshot()
  })
})
