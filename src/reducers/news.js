const initialState = {
  newsList: [],
  isFetching: false
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_FETCH_DATA': 
      return {
        newsList: [],
        isFetching: true
      };
    case 'GET_NEWS':
      return {
        newsList: action.data,
        isFetching: 'success'
      }
    default:
      return state;
  }
}

export default news