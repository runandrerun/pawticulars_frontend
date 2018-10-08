export const createMessage = (messageData, token) => {
  const url = `http://localhost:3000/messages`
  console.log('MESSAGE', messageData)
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accepts: 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({message: messageData})
  }
  return fetch(url, options)
  .then(res => res.json())
}
