const initialState = {
  articleList: [],
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLE': 
      return {
        
      };
    
    default:
      return state;
  }
}

export default article