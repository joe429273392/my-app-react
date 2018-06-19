const initialState = {
  articleList: [],
  isSearching: false
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_SEARCH': 
      return {
        articleList: [],
        isSearching: true
      };
    case 'GET_SEARCH_ARTICLE':
      return {
        articleList: action.data,
        isSearching: 'success'
      }
    default:
      return state;
  }
}

export default search