import adapters from '../adapters';

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    payload: {user}
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    fetchUsers()
      .then(users => {
        dispatch(setUsers(users))
      })
  }
}

export const editUser = (user) => {
  return (dispatch) => {
    fetchUpdateUser(user)
      .then(userRes => {
        dispatch(setUser(userRes))
      })
  }
}

////////

const setUsers = (users) => {
  return {
    type: 'LOAD_USERS',
    payload: {
      users
    }
  }
}

const setUser = (user) => {
  return {
    type: 'EDIT_USER',
    payload: {
      user
    }
  }
}
