const initialState = {
  isLogin: false,
  loginSuccess: false,
  loginError: false,
  token: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_LOGIN': 
      return {
        ...state,
        isLogin: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        isLogin: false,
        token: action.username,
        loginSuccess: true,
        loginError: false,
      };
    case 'LOGIN_ERROR':
      return {
        isLogin: false,
        token: "",
        loginSuccess: false,
        loginError: true
      }
    default:
      return state;
  }
}

export default user