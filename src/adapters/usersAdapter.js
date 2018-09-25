export const fetchUpdateUser = (user) => {
  const url = `http://localhost:3000/users/${user.id}`
  const options = {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: user})
  }
  return fetch(url, options)
  .then(res => res.json())
}

export const fetchUsers = () => {
  return fetch(`http://localhost:3000/users`)
  .then(res => res.json())
}

export const fetchUser = (user) => {
  return fetch(`http://localhost:3000/users/${user}`)
  .then(res => res.json())
}

export const createUser = (user) => {
  const url = `http://localhost:3000/users`
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: user})
  }
  return fetch(url, options)
  .then(res => res.json())
}

export const loginUser = (userData) => {
  return fetch(`http://localhost:3000/login`, {
    method: 'POST',
    body: JSON.stringify({user: {username: userData.username, password: userData.password}}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
}

export const reAuth = (token) => {
  const options = {
        headers : {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token
        }
      }
  return fetch('http://localhost:3000/reauth', options)
    .then(resp => resp.json())
}

// export const reAuth = () => {
//   if (localStorage.getItem('token')) {
//     fetch(`http://localhost:3000/reauth`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': localStorage.getItem('token')
//       }
//     })
//     .then(res => res.json())
//   } else {
//
//   }
// }
