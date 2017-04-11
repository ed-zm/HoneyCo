/*
 *
 * BlogPost reducer
 *
 */

import { fromJS } from 'immutable';
import { BLOG_POST_FETCH_FAILED, BLOG_POST_FETCH_SUCCEEDED } from './constants';

const initialState = fromJS({});

function blogPostReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_POST_FETCH_SUCCEEDED:
      return state;
    case BLOG_POST_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}

export default blogPostReducer;
