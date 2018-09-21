const initialState = {
  users: [],
  selectedUser: {},
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_USERS':
    return {
      ...state,
      users: action.payload.users
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

    default:
    return state
  }
}

export default userReducer;
