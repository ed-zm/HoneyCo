/*
 *
 * BlogList actions
 *
 */

import { BLOG_LIST_FETCH_REQUESTED } from './constants'

export function getBlogList () {
  return {
    type: BLOG_LIST_FETCH_REQUESTED,
  }
}
