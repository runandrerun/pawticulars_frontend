import { fetchDog, fetchDogs, fetchUpdateDog, createDog } from '../adapters/dogsAdapter';
import { fetchUser, fetchUsers, fetchUpdateUser, createUser } from '../adapters/usersAdapter'

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

export const loadUser = (user) => {
  return (dispatch) => {
    fetchUser(user)
      .then(userRes => {
        dispatch(currentUser(user))
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

const currentUser = (user) => {
  return {
    type: 'CURRENT_USER',
    payload: {
      user
    }
  }
}
