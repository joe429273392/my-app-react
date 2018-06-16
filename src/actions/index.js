import fetch from 'cross-fetch'

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

const getNews = (rs) => ({
  type: 'GET_NEWS',
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