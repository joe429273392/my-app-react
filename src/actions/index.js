import fetch from 'cross-fetch'
import { push } from 'react-router-redux'

const doLogin = () => ({
  type: 'DO_LOGIN',
})

const loginSuccess = (state) => ({
  type: 'LOGIN_SUCCESS',
  username: state.username
})

const loginError = () => ({
  type: 'LOGIN_ERROR',
})

const doFetchData = () => ({
  type: 'DO_FETCH_DATA',
})

const doSearch = () => ({
  type: 'DO_SEARCH'
})

const getNews = (rs) => ({
  type: 'GET_NEWS',
  data: rs
})

const getArticle = (rs) => ({
  type: 'GET_ARTICLE',
  data: rs
})

const getClassification = (rs) => ({
  type: 'GET_CLASSIFICATION',
  data: rs
})

const getSearchArticle = (rs) => ({
  type: 'GET_SEARCH_ARTICLE',
  data: rs
})

export function fetchLogin(state) {

  return function(dispatch) {
    dispatch(doLogin());
    return fetch('http://localhost:4000/login', {
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
    }).then(function(res) {
      return res.json();
    }).then(function(rs) {
      if (rs.status === 0) {
        dispatch(loginError());
      } else if (rs.status === 1) {
        dispatch(loginSuccess(state));
      }
    })
  }
}

export function fetchNews() {

  return function(dispatch) {
    dispatch(doFetchData());
    return fetch('http://localhost:4000/News')
    .then(function(res) {
      return res.json();
    }).then(function(rs) {
      dispatch(getNews(rs));
    })
  }
}

export function fetchArticle() {

  return function(dispatch) {
    dispatch(doFetchData());
    return fetch('http://localhost:4000/article')
    .then(function(res) {
      return res.json();
    }).then(function(rs) {
      dispatch(getArticle(rs));
    })
  }
}

export function fetchClassification() {

  return function(dispatch) {
    dispatch(doFetchData());
    return fetch('http://localhost:4000/classification')
    .then(function(res) {
      return res.json();
    }).then(function(rs) {
      dispatch(getClassification(rs));
    })
  }
}

export function searchArticle(searchContent) {

  return function(dispatch) {
    dispatch(doSearch());
    return fetch('http://localhost:4000/search?s='+searchContent)
    .then(res => res.json())
    .then(rs => dispatch(getSearchArticle(rs)))
    .then(() => dispatch(push('/login')));
  }
}