const initialState = {
  users: [],
  dogs: [],
  selectedUser: {},
  selectedDog: {},
  communities: []
}

const reducer = (state = initialState, action) => {
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
    default:
    return state
  }
}

export default reducer
