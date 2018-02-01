import React, { Component } from 'react';
import { render } from 'react-dom';
import DetailsForm  from './detailsform'
import {InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
import GoogleMapDrawFilter from "react-google-map-draw-filter";



export class MapContainer extends Component {
constructor (props) {
  super(props);
  this.state = {
    drawMode:false,
    loaded:false,
    activeMarkers: [],
    address: '',
    markers: [

    ],
    othermarkers: [
      {
  info:'- Marker1',
  label:'A',
  title:'hello',
  latLng:{lng:-123.097665,lat:49.264254}
},

{
  label:'B',
  info:'- Marker2',
  latLng:{lng:-123.104124,lat: 49.266416}
},

{
  label:'C',
  info:'- Marker 3',
  latLng:{lng:-123.117943 ,lat:49.278747}
},

// {
//   label:'D',
//   info:'- Marker 4',
//   latLng:{lng:-123.126311 ,lat:49.278988}
// },

{
  label:'E',
  info:'- Marker 5',
  latLng:{lng:-123.132362 ,lat:49.275147}
}
    ]
  };
}
componentDidMount(){

}

addMarker(label, info, lat, long) {
  const { othermarkers } = this.state;
  const newMarker = { label, info, latLng: { lng: long, lat } };

  this.setState({
    othermarkers: [
      ...othermarkers, newMarker
    ]
  });
}

onMarkerClick(marker,e){
  const infowindow = new google.maps.InfoWindow({
    content: `<div id='details'></div>`
  });

  google.maps.event.addListener(infowindow, 'domready', function() {
    return (<DetailsForm />, document.getElementById('details'));
  });

  infowindow.open(marker.map, marker);

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
  console.log("states", this.state.activeMarkers);

}

toggleDraw(){
  this.setState({
    drawMode:!this.state.drawMode ,
  });
}

handleChange(event) {
  this.setState({address: event.target.value});
  console.log(this.state.address);
}

handleSubmit(ev) {
  ev.preventDefault();
  console.log(ev.target.details.value);
  console.log(ev.target.address.value);
  console.log(this.state.address);

  let newMarker = {
    Address:  ev.target.address.value,
    Description: ev.target.details.value,
    Cost: ev.target.cost.value,
    Landlord: ev.target.landlord.value,
  }
  console.log('new marker', newMarker);
  this.setState({markers: this.state.markers.push(newMarker)});
  console.log(this.state.markers);

  const geocoder = new window.google.maps.Geocoder();
  geocoder.geocode({ address: this.state.address }, (results, status) => {
    const location = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng()
    };
    this.addMarker('Listing', '', location.lat, location.lng);
  });

}
onFormSubmit(event) {
  event.preventDefault();
  console.log(event.target.details.value);
  console.log(event.target.address.value);

}

render() {
  const styles = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // change map size
  const mapStyle = {
    height: '700px',
    width: '1000px',
    }

    //change map default focus
  const mapConfig={
  zoom:14,
  lat:49.275147,
  lng:-123.132362,
  }

  const markers = [

    ];

    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
      <div className="App">

        <GoogleMapDrawFilter
          style={styles}
          drawMode={this.state.drawMode}
          markers={this.state.othermarkers}
          mapConfig={mapConfig}
          mapStyle={mapStyle}
          handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
          onMarkerClick={this.onMarkerClick.bind(this)}
          apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
        />

      </div>

      <h1>{this.renderMarkerInfo.bind(this)()}</h1>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
            Address:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />

        </label>
        <input name='details' placeholder='Description' />
        <input name='address' placeholder='Address' />
        <input name='cost' placeholder='Cost' />
        <input name='landlord' placeholder='Landlord' />
        <button>Summit </button>


      </form>


      <div>

      </div>
    </div>
  );
}
}

 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
