/*
 *
 * BlogList
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Card, CardBlock, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardTitle } from 'reactstrap'
import Masonry from 'react-masonry-component'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import { createStructuredSelector } from 'reselect'
import makeSelectBlogList from './selectors'

import { getBlogList } from './actions'
import ColoredContainer from '../../components/ColoredContainer/index'
import { HoneyCoDarkGray, HoneyCoLightGray } from '../../constants'

const StyledSlider = styled(Slider)`
  .slick-next {
    right: 0;
    z-index: 1000;
    height: 40px;
    width: 40px;
  }
  .slick-prev {
    left: 0;
    z-index: 1000;
    height: 40px;
    width: 40px;
  }
  .slick-next::before, .slick-prev::before {
    font-size: 40px;
  }
  .slick-dots {
    position: initial;
  }
`

const BottomCardImgOverlay = styled(CardImgOverlay)`
  top: initial;
  color: white;
  text-weight: 700;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

const FilteredImage = styled(CardImg)`
  
`

export class BlogList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.props.dispatch(getBlogList())
  }

  render () {
    return (
      <div>
        <Helmet
          title="HoneyCo Homes Blog"
          meta={[
            { name: 'description', content: 'Description of BlogList' },
          ]}
        />
        <StyledSlider
          swipeToSlide centerMode slidesToShow="4"
          responsive={[
            { breakpoint: 477, settings: { slidesToShow: '1' } },
            { breakpoint: 577, settings: { slidesToShow: '1' } },
            { breakpoint: 769, settings: { slidesToShow: '2' } },
            { breakpoint: 1025, settings: { slidesToShow: '3' } },
          ]}
        >
          <Card>
            <FilteredImage
              width="100%"
              src="//lorempixel.com/256/256/people/?1"
              alt="Card image cap"
            />
            <BottomCardImgOverlay>
              <CardTitle>Living Independently</CardTitle>
              <CardSubtitle>Zachary Watson</CardSubtitle>
            </BottomCardImgOverlay>
          </Card>
          <Card>
            <FilteredImage
              width="100%"
              src="//lorempixel.com/256/256/technics?2"
              alt="Card image cap"
            />
            <BottomCardImgOverlay>
              <CardTitle>HoneyCo Technology</CardTitle>
              <CardSubtitle>Zach McCormick</CardSubtitle>
            </BottomCardImgOverlay>
          </Card>
          <Card>
            <FilteredImage
              width="100%"
              src="//lorempixel.com/256/256/transport/?3"
              alt="Card image cap"
            />
            <BottomCardImgOverlay>
              <CardTitle>Installation Day</CardTitle>
              <CardSubtitle>Julie Barnick</CardSubtitle>
            </BottomCardImgOverlay>
          </Card>
          <Card>
            <FilteredImage
              width="100%"
              src="//lorempixel.com/256/256/people/?4"
              alt="Card image cap"
            />
            <BottomCardImgOverlay>
              <CardTitle>Is HoneyCo Right for Me?</CardTitle>
              <CardSubtitle>Don Metzger</CardSubtitle>
            </BottomCardImgOverlay>
          </Card>
          <Card>
            <FilteredImage
              width="100%"
              src="//lorempixel.com/256/256/abstract/?5"
              alt="Card image cap"
            />
            <BottomCardImgOverlay>
              <CardTitle>What HoneyCo Does</CardTitle>
              <CardSubtitle>Ashley Kent</CardSubtitle>
            </BottomCardImgOverlay>
          </Card>
        </StyledSlider>
        <ColoredContainer backgroundColor={HoneyCoLightGray} textColor={HoneyCoDarkGray} title="Recent Articles">
          <Masonry options={{ percentPosition: true, isFitWidth: true }}>
            <Card style={{ color: HoneyCoDarkGray, minWidth: '200px', width: '33%' }}>
              <FilteredImage
                width="100%"
                src="//lorempixel.com/256/256/abstract/?6"
                alt="Card image cap"
              />
              <CardBlock>
                <CardTitle>What HoneyCo Does</CardTitle>
                <CardSubtitle>Ashley Kent</CardSubtitle>
              </CardBlock>
              <CardFooter>2 days ago</CardFooter>
            </Card>
            <Card style={{ color: HoneyCoDarkGray, minWidth: '400px', width: '66%' }}>
              <FilteredImage
                width="100%"
                src="//lorempixel.com/256/256/people/?7"
                alt="Card image cap"
              />
              <CardBlock>
                <CardTitle>Is HoneyCo Right for Me?</CardTitle>
                <CardSubtitle>Don Metzger</CardSubtitle>
              </CardBlock>
              <CardFooter>3 days ago</CardFooter>
            </Card>
            <Card style={{ color: HoneyCoDarkGray, minWidth: '200px', width: '33%' }}>
              <FilteredImage
                width="100%"
                src="//lorempixel.com/256/256/transport/?8"
                alt="Card image cap"
              />
              <CardBlock>
                <CardTitle>Installation Day</CardTitle>
                <CardSubtitle>Julie Barnick</CardSubtitle>
              </CardBlock>
              <CardFooter>March 15, 2017</CardFooter>
            </Card>
          </Masonry>
        </ColoredContainer>
      </div>
    )
  }
}

BlogList.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  BlogList: makeSelectBlogList(),
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
