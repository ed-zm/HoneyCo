import { fromJS } from 'immutable';
import blogListReducer from '../reducer';

describe('blogListReducer', () => {
  it('returns the initial state', () => {
    expect(blogListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
