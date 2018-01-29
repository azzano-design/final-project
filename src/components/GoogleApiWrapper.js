import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
// polygon
import GoogleMapDrawFilter from "react-google-map-draw-filter";


export class MapContainer extends Component {
  constructor () {
    super();
    this.state = {
      drawMode:false,
      loaded:false,
    };
  }
  handleReturnedMarkers(markers) {
    this.setState({
      activeMarkers: markers
    });
  }
  render() {
      const style = {
        width: '100%',
        height: '100%'
      }
      // added this for polygon
      const markers = [{info:' Marker1', label:'A',latLng:{lat:49.282729, lng:-123.120738}},
        {info:' Marker2', label:'B',latLng:{lat:49.282729, lng:-123.120738}}];


      return (
        <Map google={window.google}
          style={style}
          initialCenter={{
            lat: 49.282729,
            lng: -123.120738
          }}
          zoom={14}
          >

          <GoogleMapDrawFilter
            apiKey='AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI'
            drawMode={true}
            markers={markers}
            handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
            />

        </Map>

      );
  }
}


 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
