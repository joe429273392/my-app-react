import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import user from './user'
import news from './news'
import article from './article'
import classification from './classification'
import search from './search'

export default combineReducers({
  user,
  news,
  article,
  classification,
  search,
  router: routerReducer
})