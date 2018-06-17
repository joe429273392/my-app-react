const initialState = {
  classificationList: [],
  isFetching: false
}

const classification = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_FETCH_DATA': 
      return {
        classificationList: [],
        isFetching: true
      };
    case 'GET_CLASSIFICATION':
      return {
        classificationList: action.data,
        isFetching: 'success'
      }
    default:
      return state;
  }
}

export default classification