import React from 'react'
import { shallow } from 'enzyme'
import ContactUs from '../index'

describe('<ContactUs />', () => {
  it('It should render the ContactUs Component', () => {
    const wrapper = shallow(<ContactUs/>)
    expect(wrapper).toMatchSnapshot()
  })
})
