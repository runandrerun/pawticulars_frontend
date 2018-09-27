export const fetchUpdatedogPark = (dogPark) => {
  const url = `http://localhost:3000/dogParks/${dogPark.id}`
  const options = {
    method: 'PATCH',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dogPark: dogPark})
  }
  return fetch(url, options)
  .then(res => res.json())
}

export const fetchDogParks = () => {
  return fetch(`http://localhost:3000/dog_parks`, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  .then(res => res.json())
}

export const fetchDogPark = (dogPark) => {
  return fetch(`http://localhost:3000/dog_parks/${dogPark.id}`)
  .then(res => res.json())
}

export const createDogPark = (dogPark) => {
  const url = `http://localhost:3000/dog_parks`
  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dogPark: dogPark})
  }
  return fetch(url, options)
  .then(res => res.json())
}
