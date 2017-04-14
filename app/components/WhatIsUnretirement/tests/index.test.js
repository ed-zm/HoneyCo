import React from 'react'
import { shallow } from 'enzyme'
import WhatIsUnretirement from '../index'

const text = {
  title: 'title',
  firstParagraph: 'first paragraph',
  secondParagraph: 'second paragraph',
}
describe('<WhatIsUnretirement />', () => {
  it('It should render the WhatIsUnretirement Component', () => {
    const wrapper = shallow(<WhatIsUnretirement text = {text}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
