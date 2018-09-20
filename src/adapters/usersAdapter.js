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
  return fetch(`http://localhost:3000/users/${user.id}`)
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
