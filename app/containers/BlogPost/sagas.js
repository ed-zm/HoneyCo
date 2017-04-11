import ButterCMS from 'buttercms';
import { put, takeLatest } from 'redux-saga/effects';
import { BLOG_POST_FETCH_FAILED, BLOG_POST_FETCH_REQUESTED, BLOG_POST_FETCH_SUCCEEDED } from './constants';

const Butter = ButterCMS('b8851e53fff39ab239046346243fc7a112ba7a8e');


function* fetchBlogPost(action) {
  try {
    const response = yield Butter.post.retrieve(action.slug);
    yield put({ type: BLOG_POST_FETCH_SUCCEEDED, response });
  } catch (e) {
    yield put({ type: BLOG_POST_FETCH_FAILED, message: e.message });
  }
}

function* fetchBlogPostSaga() {
  yield takeLatest(BLOG_POST_FETCH_REQUESTED, fetchBlogPost);
}

// All sagas to be loaded
export default [
  fetchBlogPostSaga,
];
