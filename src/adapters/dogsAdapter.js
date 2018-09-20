export const fetchUpdateDog = (dog) => {
  const url = `http://localhost:3000/dogs/${dog.id}`
  const options = {
    method: 'PATCH',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dog: dog})
  }
  return fetch(url, options)
  .then(res => res.json())
}

export const fetchdogs = () => {
  return fetch(`http://localhost:3000/dogs`)
  .then(res => res.json())
}

export const fetchdog = (dog) => {
  return fetch(`http://localhost:3000/dogs/${dog.id}`)
  .then(res => res.json())
}

export const createdog = (dog) => {
  const url = `http://localhost:3000/dogs`
  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({dog: dog})
  }
  return fetch(url, options)
  .then(res => res.json())
}
