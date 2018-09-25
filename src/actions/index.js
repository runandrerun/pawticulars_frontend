import { fetchDog, fetchDogs, fetchUpdateDog, createDog } from '../adapters/dogsAdapter';
import { fetchUser, fetchUsers, fetchUpdateUser, createUser, loginUser, reAuth } from '../adapters/usersAdapter'

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

export const logout = () => {
  localStorage.clear()
  return (dispatch) => {
    dispatch(logoutCurrentUser())
  }
}

export const auth = (token) => {
  return (dispatch) => {
    console.log('token', token)
    reAuth(token)
    .then(res => {
      console.log('Inside Auth', res)
      dispatch(authenticateUser(res))
    })
  }
}

////////

const authenticateUser = (user) => {
  return {
    type: 'AUTH_USER',
    payload: {
      user
    }
  }
}

const logoutCurrentUser = () => {
  return {
    type: 'LOGOUT_USER',
    payload: {
      user: {}
    }
  }
}

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
