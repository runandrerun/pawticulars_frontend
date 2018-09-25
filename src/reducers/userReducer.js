const initialState = {
  users: [],
  selectedUser: {},
  authenticating: true,
  currentUser: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_USERS':
    return {
      ...state,
      users: action.payload.users
    }

    case 'CURRENT_USER':
    return {
      ...state,
      currentUser: action.payload.user
    }

    case 'SELECT_USER':
    return {
      ...state,
      selectedUser: action.payload.user
    }

    case 'SELECT_USER_DOG':
    return {
      ...state,
      selectedUserDog: action.payload.user
    }

    case 'LOGIN_USER':
    return {
      ...state,
      authenticating: false,
      currentUser: action.payload.user
    }

    case 'LOGOUT_USER':
    return {
      ...state,
      authenicating: true,
      currentUser: action.payload.user
    }

    case 'AUTH_USER':
    console.log('Inside Auth User', action)
    return {
      ...state,
      authenticating: false,
      currentUser: action.payload.user
    }

    default:
    return state
  }
}

export default userReducer;
