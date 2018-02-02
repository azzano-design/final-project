import React, { Component } from 'react';
import { render } from 'react-dom';
import DetailsForm  from './detailsform.jsx'
import {InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
import GoogleMapDrawFilter from "react-google-map-draw-filter";
import axios from 'axios';


export class MapContainer extends Component {
constructor (props) {
  super(props);
  this.state = {
    drawMode:false,
    loaded:false,
    activeMarkers: [],
    address: '',
    rooms: [],
    markers: [

    ],
    otherMarkers: [
      {
        info:'- Marker1',
        label:'A',
        title:'hello',
        latLng:{lng:-123.097665,lat:49.264254},
        icon: {
          url: '/images/icon.png'
        }
      },

      {
        label:'B',
        info:'- Marker2',
        latLng:{lng:-123.104124,lat: 49.266416},
        icon: {
          url: '/images/icon.png'
        }
      },

      {
        label:'C',
        info:'- Marker 3',
        latLng:{lng:-123.117943 ,lat:49.278747},
        icon: {
          url: '/images/icon.png'
        }
      },

      {
        label:'E',
        info:'- Marker 5',
        latLng:{lng:-123.132362 ,lat:49.275147},
        icon: {
          url: '/images/icon.png'
        }
      }
    ]
  };
}

getRooms() {
  let rooms = [];
  axios.get('/api/rooms/')
    .then((response) => {
      rooms = response.data;
      this.setState({
        rooms: rooms
      });
      console.log(this.state.rooms);
    })
    .catch((error) => {
      console.log(error);
    });
}

addMarkerFromDatabase() {
  //TODO for each item in array this.state.rooms
  //TODO convert this.state.rooms.street into geocoded address
  //TODO add marker for each room
}


componentDidMount(){
  this.getRooms();
}



addMarker(label, info, lat, long) {
  const { otherMarkers } = this.state;
  const newMarker = { label, info, latLng: { lng: long, lat } };

  this.setState({
    otherMarkers: [
      ...otherMarkers, newMarker
    ]
  });
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
  this.setState({
    markers: this.state.markers.concat(newMarker)
  });
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
    width: window.innerWidth,
    height: window.innerHeight,
    scrollwheel: false
  }

  //change map default focus
  const mapConfig={
    zoom:14,
    lat:49.275147,
    lng:-123.132362,
    disableDefaultUI: true
  }
  const polygonOptions={
    fillColor: '#FFC807',
    fillOpacity: 0.6,
    strokeColor:'#FFC807',
    strokeWeight:3,
    clickable: true,
    editable: true,
    zIndex: 1
  }

  const markers = [

    ];

    return (
      <div>
        <div className="columns">
          <aside className="column is-3">
            <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Address:
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
              </label>
              <input name='details' placeholder='Description' />
              <input name='address' placeholder='Address' />
              <input name='cost' placeholder='Cost' />
              <input name='landlord' placeholder='Landlord' />
              <h1>{this.renderMarkerInfo.bind(this)()}</h1>
              <button>Summit </button>
            </form>
          </aside>
          <div className="column is-9">
            <div className="App">
              <GoogleMapDrawFilter
                style={styles}
                drawMode={this.state.drawMode}
                markers={this.state.otherMarkers}
                mapConfig={mapConfig}
                mapStyle={mapStyle}
                polygonOptions={polygonOptions}
                handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
                onMarkerClick={this.onMarkerClick.bind(this)}
                apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')})(MapContainer)
