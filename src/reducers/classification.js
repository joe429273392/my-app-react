const initialState = {
  classificationList: [],
}

const classification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLASSIFICATION': 
      return {
        
      };
    
    default:
      return state;
  }
}

export default classification