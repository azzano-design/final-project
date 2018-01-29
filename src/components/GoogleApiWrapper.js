import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
// polygon
import GoogleMapDrawFilter from "react-google-map-draw-filter";


export class MapContainer extends Component {


  constructor () {
    super();
    this.state = {
      drawMode:false,
      activeMarkers: [],
    };
  }
  onMarkerClick(marker,e){
    this.setState({
      activeMarkers : [marker]
    });
  }
  renderMarkerInfo() {
		if (this.state.activeMarkers) {
			return this.state.activeMarkers.map((marker,i)=>(
				<div key={`marker${i}`}>
					{marker.label}
					{marker.info}
				</div>)
			);
		}
	}

  handleReturnedMarkers(markers) {
    this.setState({
      activeMarkers: markers
    });
  }
  toggleDraw(){
    this.setState({
      drawMode:!this.state.drawMode ,
    });
  }

  render() {
    const markers = [
  			{
  				info:'- Marker1',
          label:'A',
  				title:'hello',
  				latLng:{lng:2.13815342634916,lat:41.39485570794}
  			},

  			{
          label:'B',
  				info:'- Marker2',
  				latLng:{lng:2.1575260162353516,lat: 41.39586980544921}
  			},

  			{
          label:'C',
  				info:'- Marker 3',
  				latLng:{lng:2.162332534790039 ,lat:41.397801375978204}
  			},

  			{
          label:'D',
          info:'- Marker 4',
          latLng:{lng:2.154865264892578 ,lat:41.38576031676253}
  			},

  			{
          label:'E',
          info:'- Marker 5',
          latLng:{lng:2.14205645751953 ,lat:41.38344199588044}
  			},

  		];



      return (<div>
        <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
        <div className="App">

          <GoogleMapDrawFilter
            drawMode={this.state.drawMode}
            markers={markers}
            handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
            onMarkerClick={this.onMarkerClick.bind(this)}
            apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
          />

        </div>
        <h1>{this.renderMarkerInfo.bind(this)()}</h1>
      </div>
    );
  }
}


 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
