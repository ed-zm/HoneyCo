import React from 'react'
import { shallow } from 'enzyme'
import ColoredContainer from '../index'

describe('<ColoredContainer />', () => {
  it('It should render the ColoredContainer Component', () => {
    const wrapper = shallow(<ColoredContainer/>)
    expect(wrapper).toMatchSnapshot()
  })
})
