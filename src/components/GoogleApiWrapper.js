import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  render() {

      return (
        <Map google={this.props.google}
          initialCenter={{
            lat: 49.282729,
            lng: -123.120738
          }}
          zoom={14}
          >

        </Map>
      )
  }
}

 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
