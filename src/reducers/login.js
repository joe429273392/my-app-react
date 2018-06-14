const initialState = {
  isLogin: false,
  loginSuccess: false,
  loginError: false,
  token: ''
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_LOGIN': 
      return {
        ...state,
        isLogin: true,
      };
    
    default:
      return state;
  }
}

export default login