import request from 'superagent'

const spaceXUrl = 'http://localhost:3000/api/v1/spacex'

export function getData () {
  return request
    .get(spaceXUrl)
    .then(response => { // 'response' can be named anything here
     // console.log('client-side: ', response.body)
      return response.body
    })
}
