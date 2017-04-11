import { createSelector } from 'reselect';

/**
 * Direct selector to the blogList state domain
 */
const selectBlogListDomain = () => (state) => state.get('blogList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BlogList
 */

const makeSelectBlogList = () => createSelector(
  selectBlogListDomain(),
  (substate) => substate.toJS(),
);

export default makeSelectBlogList;
export {
  selectBlogListDomain,
};
