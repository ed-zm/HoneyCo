import React from 'react'
import HowItWorksSection from '../../components/HowItWorksSection/index'
import WhatIsUnretirement from '../../components/WhatIsUnretirement/index'
import text from './texts'
import Background from './static/background.jpg'
import Image1 from './static/image1.png'

const HowItWorks = () =>
  <div>
    <HowItWorksSection text = {text.howItWorks} background = {Image1}/>
    <WhatIsUnretirement text = {text.whatIsUnretirement} background = {Background}/>
  </div>
export default HowItWorks
