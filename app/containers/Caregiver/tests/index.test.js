import React from 'react'
import { shallow } from 'enzyme'
import Caregiver from '../index'

describe('<Caregiver />', () => {
  it('It should render the Caregiver Component', () => {
    const wrapper = shallow(<Caregiver/>)
    expect(wrapper).toMatchSnapshot()
  })
})
