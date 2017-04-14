import React from 'react'
import { shallow } from 'enzyme'
import ResidentBox from '../index'
import { HoneyCoBlue } from '../../../constants'

describe('<ResidentBox />', () => {
  it('It should render the ResidentBox Component', () => {
    const wrapper = shallow(<ResidentBox color={false} background={false} text={false} textColor={HoneyCoBlue}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
