import React from 'react'

import { getData } from '../api'

export class SpcaeXInfo extends React.Component {
  state = {
    name: '',
    success: '',
    details: '',
    flight_number: ''
  }

  componentDidMount () {
    getData()
      .then(spaceXdata => {
        console.log(spaceXdata)
        this.setState(
          {
            name: spaceXdata.name,
            success: spaceXdata.success,
            details: spaceXdata.details,
            flightNumber: spaceXdata.flight_number
          }
        )
      }) //  spaceXdata can be named anything here
  }

  render () {
    const { name, success, details, flightNumber } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>Mission Number: {flightNumber}</h3>
        <p>{details}</p>
        <p>{success && 'This mission was a success'}</p>
      </div>
    )
  }
}

export default SpcaeXInfo
