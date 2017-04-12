/*
 *
 * BlogPost actions
 *
 */

import { BLOG_POST_FETCH_REQUESTED } from './constants'

export function getBlogPost (slug) {
  return {
    type: BLOG_POST_FETCH_REQUESTED,
    slug,
  }
}
