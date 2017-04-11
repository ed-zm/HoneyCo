import { fromJS } from 'immutable';
import blogPostReducer from '../reducer';

describe('blogPostReducer', () => {
  it('returns the initial state', () => {
    expect(blogPostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
