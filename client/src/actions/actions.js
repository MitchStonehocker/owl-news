// client/src/actions/actions.js

import actionTypes from '../constants/actionTypes'

// News
export function newsReceived (news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  }
}

export function newsItemReceived (newsItem) {
  return {
    type: actionTypes.NEWSITEM_RECEIVED,
    newsItem: newsItem
  }
}

export function newsFetch (fakeNews) {
  return dispatch => {
    dispatch(newsReceived(fakeNews))
  }
}

export function newsItemFetch (fakeNewsItem) {
  return dispatch => {
    dispatch(newsItemReceived(fakeNewsItem))
  }
}

// Notes
export function notesReceived (news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  }
}

export function notesFetch (fakeNews) {
  return dispatch => {
    dispatch(newsReceived(fakeNews))
  }
}

// Messages
export function messagesReceived (news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  }
}

export function messagesFetch (fakeNews) {
  return dispatch => {
    dispatch(newsReceived(fakeNews))
  }
}
