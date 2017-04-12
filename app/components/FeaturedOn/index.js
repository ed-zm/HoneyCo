import React from 'react'
import { Row, Container } from 'reactstrap'
import styled from 'styled-components'
import FeaturedAdamCarolla from './static/adam-carolla-show.png'
import FeaturedCrains from './static/crains.png'
import FeaturedNashville from './static/nashville-business-journal.svg'
import FeaturedStanding from './static/standing-with-hope.jpg'
import FeaturedTechCo from './static/tech-co.png'

const FeaturedCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
  margin: 0 -15px
`

const FeaturedCardWrapper = styled.div`
  margin: 20px 10px;
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.7;
    margin: 0 15px;
  }
`
const FeaturedOn = () =>
  <Container>
    <Row>
      <FeaturedCards>
        <FeaturedCardWrapper>
          <img src={FeaturedAdamCarolla} width="180" alt="The Adam Carolla Show" />
        </FeaturedCardWrapper>
        <FeaturedCardWrapper>
          <img src={FeaturedCrains} width="180" alt="Crain's" />
        </FeaturedCardWrapper>
        <FeaturedCardWrapper>
          <img src={FeaturedNashville} width="180" alt="Nashville Business Journal" />
        </FeaturedCardWrapper>
        <FeaturedCardWrapper>
          <img src={FeaturedStanding} width="180" alt="Standing with Hope" />
        </FeaturedCardWrapper>
        <FeaturedCardWrapper>
          <img src={FeaturedTechCo} width="180" alt="Tech Co" />
        </FeaturedCardWrapper>
      </FeaturedCards>
    </Row>
  </Container>

export default FeaturedOn
