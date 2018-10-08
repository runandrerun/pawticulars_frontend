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

    case 'CREATE_MESSAGE':
    console.log('inside reducer', action.payload.messageData)
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        messages: action.payload.messageData
    }
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
    console.log('INSIDE REDUCER', action.payload)
    return {
      ...state,
      authenticating: false,
      currentUser: action.payload.user
    }

    case 'LOGOUT_USER':
    return initialState
    // return {
    //   ...state,
    //   authenicating: true,
    //   currentUser: action.payload.user
    // }

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
