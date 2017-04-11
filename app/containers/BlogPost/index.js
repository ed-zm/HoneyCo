/*
 *
 * BlogPost
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectBlogPost from './selectors';
import { getBlogPost } from './actions';

export class BlogPost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getBlogPost(this.props.routeParams.slug));
  }

  render() {
    return (
      <div>
        <Helmet
          title="BlogPost"
          meta={[
            { name: 'description', content: 'Description of BlogPost' },
          ]}
        />
      </div>
    );
  }
}

BlogPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routeParams: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BlogPost: makeSelectBlogPost(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
