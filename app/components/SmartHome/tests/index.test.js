import React from 'react'
import { shallow } from 'enzyme'
import SmartHome from '../index'

describe('<SmartHome />', () => {
  it('It should render the SmartHome Component', () => {
    const wrapper = shallow(<SmartHome/>)
    expect(wrapper).toMatchSnapshot()
  })
})
