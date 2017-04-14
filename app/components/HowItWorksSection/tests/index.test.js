import React from 'react'
import { shallow } from 'enzyme'
import HowItWorksSection from '../index'
const text = {
  box1: {
    title: 'title1',
    description: 'description1',
  },
  box2: {
    title: 'title2',
    description: 'description2',
  },
  box3: {
    title: 'title3',
    description: 'description3',
  },
  box4: {
    title: 'title4',
    description: 'description4',
  },
}

describe('<HowItWorksSection />', () => {
  it('It should render the HowItWorksSection Component', () => {
    const wrapper = shallow(<HowItWorksSection text={text}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
