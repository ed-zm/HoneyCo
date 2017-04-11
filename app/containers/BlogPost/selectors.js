import { createSelector } from 'reselect';

/**
 * Direct selector to the blogPost state domain
 */
const selectBlogPostDomain = () => (state) => state.get('blogPost');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BlogPost
 */

const makeSelectBlogPost = () => createSelector(
  selectBlogPostDomain(),
  (substate) => substate.toJS(),
);

export default makeSelectBlogPost;
export {
  selectBlogPostDomain,
};
