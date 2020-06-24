import React from 'react'
import request from 'superagent'

const issURL = 'https://api.wheretheiss.at/v1/satellites/25544'

class Iss extends React.Component {
  state ={
    latitude: '',
    longitude: '',
    timestamp: '',
    visibility: ''
  }

  componentDidMount () {
    // Create api.js and move function there
    request.get(issURL)
      .then(res => {
        const { latitude, longitude, timestamp, visibility } = res.body
        this.setState({ latitude, longitude, timestamp, visibility })
      })
  }

  render () {
    const { latitude, longitude, timestamp, visibility } = this.state
    return (
    <>
      <p>Latitude: {latitude}</p>
      <p>Longitude {longitude}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Visibility: {visibility}</p>

    </>
    )
  }
}

export default Iss
