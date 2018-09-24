import { fetchDog, fetchDogs, fetchUpdateDog, createDog } from '../adapters/dogsAdapter';
import { fetchUser, fetchUsers, fetchUpdateUser, createUser, loginUser } from '../adapters/usersAdapter'

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
        dispatch(currentUser(userRes))
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

export const logUser = (userData) => {
  return (dispatch) => {
    loginUser(userData)
    .then(userRes => {
      dispatch(currentUser(userRes))
      localStorage.setItem('token', userRes.jwt)
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
    type: 'LOGIN_USER',
    payload: {
      user
    }
  }
}
