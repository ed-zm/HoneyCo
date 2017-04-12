import ButterCMS from 'buttercms'
import { put, takeLatest } from 'redux-saga/effects'

const Butter = ButterCMS('b8851e53fff39ab239046346243fc7a112ba7a8e')

function * fetchBlogList () {
  try {
    const response = yield Butter.post.list()
    yield put({ type: 'BLOG_LIST_FETCH_SUCCEEDED', response })
  } catch (e) {
    yield put({ type: 'BLOG_LIST_FETCH_FAILED', message: e.message })
  }
}

function * fetchBlogListSaga () {
  yield takeLatest('BLOG_LIST_FETCH_REQUESTED', fetchBlogList)
}

// All sagas to be loaded
export default [
  fetchBlogListSaga,
]
