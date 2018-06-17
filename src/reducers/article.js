const initialState = {
  articleList: [],
  isFetching: false
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_FETCH_DATA': 
      return {
        articleList: [],
        isFetching: true
      };
    case 'GET_ARTICLE':
      return {
        articleList: action.data,
        isFetching: 'success'
      }
    default:
      return state;
  }
}

export default article