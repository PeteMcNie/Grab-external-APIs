import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'

class Map extends React.Component {
  state = {
    lat: '',
    lng: '',
    zoom: 13
  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <>
      <h1>ISS Map</h1>
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {/* <Marker position={position}>
          <Popup>
            ISS right now
          </Popup>
        </Marker> */}
      </LeafletMap>
      </>
    )
  }
}

export default Map
