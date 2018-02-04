import React, { Component } from 'react';
import { render } from 'react-dom';
import DetailsForm from './detailsform.jsx'
import { InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap } from 'google-maps-react';
import GoogleMapDrawFilter from "react-google-map-draw-filter";
import axios from 'axios';
import fetch from 'node-fetch';
import FacebookLogin from './fb-login.jsx';



export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawMode: false,
      loaded: false,
      menuopen: false,
      activeMarkers: [],
      address: '',
      rooms: [],
      markers: [

      ],
      otherMarkers: [
        // {
        //   info: '<div class="fb-logout-button"><h2>NAME</h2></div>',
        //   label: 'Y',
        //   title: 'hello',
        //   latLng: { lng: -123.097665, lat: 49.264254 },
        //   icon: {
        //     url: '/images/icon.png'
        //   },
        //   availabledate: '02/03/2018'
        // },

        // {
        //   label: 'B',
        //   info: '- Marker2',
        //   latLng: { lng: -123.104124, lat: 49.266416 },
        //   icon: {
        //     url: '/images/icon.png'
        //   },
        //   availabledate: '02/03/2018'
        // },

        // {
        //   label: 'C',
        //   info: '- Marker 3',
        //   latLng: { lng: -123.117943, lat: 49.278747 },
        //   icon: {
        //     url: '/images/icon.png'
        //   },
        //   availabledate: '02/03/2018'
        // },

        // {
        //   label: 'E',
        //   info: '- Marker 5',
        //   latLng: { lng: -123.132362, lat: 49.275147 },
        //   icon: {
        //     url: '/images/icon.png'
        //   },
        //   availabledate: '02/03/2018'
        // }
      ]
    };
  }

  async renderRooms() {
    const response = await fetch('http://localhost:5000/api/rooms')
    const rooms = await response.json()
    await this.setState({
      rooms: [
        ...rooms
      ]
    })
    for (let room of this.state.rooms){
      this.addMarker(null, room.street, room.lat, room.lng);
    }
  }

  addMarkerFromDatabase() {
    //TODO for each item in array this.state.rooms
    //TODO convert this.state.rooms.street into geocoded address
    //TODO add marker for each room
  }


  componentDidMount() {
    this.renderRooms();
  }



  addMarker(label, info, lat, long) {
    const { otherMarkers } = this.state;
    const newMarker = { info, latLng: { lng: long, lat }, icon: { url: '/images/icon.png' } };

    this.setState({
      otherMarkers: [
        ...otherMarkers, newMarker
      ]
    });
  }

  onMarkerClick(marker, e) {

    this.setState({
      activeMarkers: [marker]
    });
  }

  renderMarkerInfo() {
    if (this.state.activeMarkers) {
      return this.state.activeMarkers.map((marker, i) => (
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

  toggleDraw() {
    this.setState({
      drawMode: !this.state.drawMode,
    });
  }

  toggleMenu() {
    this.setState({
      menuopen: !this.state.menuopen,
    });
  }

  handleChange(event) {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev.target.details.value);
    console.log(ev.target.address.value);
    console.log(this.state.address);

    let newMarker = {
      Address: ev.target.address.value,
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
    // change map size
    const mapStyle = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    //change map default focus
    const mapConfig = {
      zoom: 14,
      lat: 49.275147,
      lng: -123.132362,
      scrollwheel: false,
      disableDefaultUI: true
    }
    const polygonOptions = {
      fillColor: '#A3A2AF',
      fillOpacity: 0.6,
      strokeColor: '#A3A2AF',
      strokeWeight: 3,
      clickable: true,
      editable: true,
      zIndex: 1
    }

    const markers = [

    ];

    if (this.state.menuopen === true) {
      return (
        <div>
          <div className="columns">
            <aside className="searchMenu column is-3">
              <button id="menu-toggle" onClick={this.toggleMenu.bind(this)}>
                <i class="fas fa-cog"></i>
              </button>
              <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                  <label>Available</label>
                  <input type="date"></input>
                </div>
                <div className="field">
                  <label>Pet Friendly</label>
                  <input name="pet_friendly" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Rent Amount</label>
                  <input name="rent_amount"></input>
                </div>
                <div className="field">
                  <label>Available Date</label>
                  <input name="available_date"></input>
                </div>
                <div className="field">
                  <label>Water</label>
                  <input name="water" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Eletricity</label>
                  <input name="eletricity" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Internet</label>
                  <input name="internet" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Heat</label>
                  <input name="heat" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Natural Gas</label>
                  <input name="natural_gas" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Storage</label>
                  <input name="storage" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Onsite Laundry</label>
                  <input name="laundry_on_site" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Fully Furnished</label>
                  <input name="furniture" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Parking</label>
                  <input name="parking" type="checkbox"></input>
                </div>
                <h1>{this.renderMarkerInfo.bind(this)()}</h1>
                <button>Summit </button>
              </form>
            </aside>
            <div className="column is-9">
              <div className="App">
                <GoogleMapDrawFilter
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
      )
    } else {
      return (
        <div>
          <div className="columns">
            <aside className="searchMenu column is-3 closed">
              <button id="menu-toggle" onClick={this.toggleMenu.bind(this)}>
                <i class="fas fa-cog"></i>
              </button>
              <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                  <label>Available</label>
                  <input type="date"></input>
                </div>
                <div className="field">
                  <label>Pet Friendly</label>
                  <input name="pet_friendly" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Rent Amount</label>
                  <input name="rent_amount"></input>
                </div>
                <div className="field">
                  <label>Available Date</label>
                  <input name="available_date"></input>
                </div>
                <div className="field">
                  <label>Water</label>
                  <input name="water" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Eletricity</label>
                  <input name="eletricity" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Internet</label>
                  <input name="internet" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Heat</label>
                  <input name="heat" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Natural Gas</label>
                  <input name="natural_gas" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Storage</label>
                  <input name="storage" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Onsite Laundry</label>
                  <input name="laundry_on_site" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Fully Furnished</label>
                  <input name="furniture" type="checkbox"></input>
                </div>
                <div className="field">
                  <label>Parking</label>
                  <input name="parking" type="checkbox"></input>
                </div>
                <h1>{this.renderMarkerInfo.bind(this)()}</h1>
                <button>Summit </button>
              </form>
            </aside>
            <div className="column is-9">
              <div className="App">
                <GoogleMapDrawFilter
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
      )
    }
  }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI') })(MapContainer)
