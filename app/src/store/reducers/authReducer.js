const initialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false,
  authenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        idToken: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        authenticated: true,
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        error: action.error,
        loading: false,
        authenticated: false,
      }
    case 'AUTH_START':
      return {
        ...state,
        error: null,
        loading: true,
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        idToken: null,
        userId: null,
        authenticated: false,
      }
    default:
      return state
  }
}


export default authReducer
