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
      available_date: undefined,
      pet_friendly: false,
      rent_amount_min: undefined,
      rent_amount_max: undefined,
      water: false,
      eletricity: false,
      internet: false,
      heat: false,
      natural_gas: false,
      storage: false,
      laundry_on_site: false,
      furnished: false,
      parking: false,
      rooms: [],
      otherMarkers: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

      const info =
      '<div class="listing-single">' +
        '<div class="listing-header">' +
          '<span class="listing-title">'+ room.street + '</span>' +
          '<div class="listing-image-container">' +
            '<div class="listing-image-filter"></div>'+
            '<img src="/images/house.jpg" alt="Placeholder image" class="listing-image"></img>' +
            '<span class="listing-price">$'+ room.rent_amount + ' /month</span>' +
            '<a href="#" class="listing-contact">Apply</a>' +
          '</div>' +
        '</div>' +
        '<p>Pro-sumer software we need distributors to evangelize the new line to local markets, for dogpile that but best practices pipeline, and Bob called an all-hands this afternoon, nor going forward. Fire up your browser can I just chime in on that one, for who\'s responsible for the ask for this request?</p>' +
        '<div class="columns">' +
          '<div class="column"></div>' +
          '<div class="column"></div>' +
        '</div>' +
      '</div>'

      this.addMarker(null, info, room.lat, room.lng );
    }
  }

  componentDidMount() {
    this.renderRooms();
  }


  async addMarker(room) {
    const info =
      '<div class="card">' +
      '<div class="card-image">' +
      '<figure class="image is-4by3">' +
      '<img src="/images/house.jpg" alt="Placeholder image">' +
      '</figure>' +
      '</div>' +
      '<div class="card-content">' +
      '<div class="media">' +
      '<div class="media-content">' +
      '<p class="title is-4">' + room.street + '</p>' +
      '<p class="subtitle is-6">$' + room.rent_amount + ' /month - Available: ' + '<time datetime="2016-1-1">' + room.available_date + '</time></p>' +
      '</div>' +
      '</div>' +
      '<div class="content">' +
      '<p>Pro-sumer software we need distributors to evangelize the new line to local markets, for dogpile that but best practices pipeline, and Bob called an all-hands this afternoon, nor going forward. Fire up your browser can I just chime in on that one, for who\'s responsible for the ask for this request? or three-martini lunch. Granularity productize make sure to include in your wheelhouse, not a hill to die on or can you ballpark the cost per unit for me productize, and when does this sunset?</p>' +
      '<br>' +
      '<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>' +
      '</div>' +
      '</div>' +
      '</div>'
    const temp = this.state.otherMarkers;
    console.log('call addMarker');
    const newMarker = { info, latLng: { lng: room.lng, lat: room.lat }, icon: { url: '/images/icon.png' } };
    for (let otherRoom in temp) {
      if (room.lat !== otherRoom.lat) {
        if (room.lng !== otherRoom.lng) {
          temp.push(newMarker);
          await this.setState({
            otherMarkers: [...temp, newMarker]
          });
          console.log("state other markers", this.state.otherMarkers);

        }
      }
    }
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
          <div>
            {marker.label}
            {marker.info}
          </div>
          <img src="/images/house.jpg"></img>
        </div>
        )
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

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log("name", name);
    this.setState({
      [name]: value
    });
    console.log("this.state.name", this.state[name]);

    const filteredRooms = []

    if (this.setState.name === true) {
      this.setState.otherMakers = []
    }
  }

  handleCheckbox(event) {
    const name = event.target.name;
    console.log("name", name);
    if (this.state[name] === false) {
      this.setState({
        [name]: true
      });

      let filteredRooms = this.state.rooms.filter(
        (room) => {
          return room[name] === true
        }
      );
      console.log("filtered rooms", filteredRooms);
      filteredRooms.map((room) => {
        this.addMarker(room);
      })
    }
    else {
      this.setState({
        [name]: false
      });
    }
    console.log("this.state.name", this.state[name]);
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

    if (this.state.menuopen === true) {
      return (
        <div>
          <div className="columns">
            <aside className="search-menu column is-3">
              <div className="search-menu-container">
                <button id="menu-toggle" onClick={this.toggleMenu.bind(this)}>
                  <i className="fas fa-cog fa-2x"></i>
                </button>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label>Available</label>
                        <input
                          className="input"
                          name="available_date"
                          type="date"
                          value={this.state.available_date}
                          onChange={this.handleInputChange}></input>
                      </div>
                      <div className="field">
                        <label>Rent Amount</label>
                        <div className="columns">
                          <div className="column">
                            <input
                              className="input"
                              name="rent_amount_min"
                              type="number"
                              value={this.state.rent_amount_min}
                              onChange={this.handleInputChange}
                              placeholder="min">
                            </input>
                          </div>
                          <div className="column">
                            <input
                              className="input"
                              name="rent_amount_max"
                              type="number"
                              value={this.state.rent_amount_max}
                              onChange={this.handleInputChange}
                              placeholder="max">
                            </input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <a className="button is-rounded is-large" onClick={this.toggleDraw.bind(this)}>
                        <span className="icon is-medium">
                          <i className="fab fa-bandcamp"></i>
                        </span>
                        <span>Polygon Search</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="searchHeading">Utilities</span>
                  </div>
                  <div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label>Water</label>
                          <label className="switch">
                            <input
                              name="water"
                              type="checkbox"
                              value={this.state.water}
                              onChange={this.handleCheckbox}></input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Eletricity</label>
                          <label className="switch">
                            <input
                              name="eletricity"
                              type="checkbox"
                              value={this.state.eletricity}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label>Heat</label>
                          <label className="switch">
                            <input
                              name="heat"
                              type="checkbox"
                              value={this.state.heat}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Natural Gas</label>
                          <label className="switch">
                            <input
                              name="natural_gas"
                              type="checkbox"
                              value={this.state.natural_gas}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="searchHeading">Amenities</span>
                  </div>
                  <div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label>Storage</label>
                          <label className="switch">
                            <input
                              name="storage"
                              type="checkbox"
                              value={this.state.storage}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Onsite Laundry</label>
                          <label className="switch">
                            <input
                              name="laundry_on_site"
                              type="checkbox"
                              value={this.state.laundry_on_site}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Parking</label>
                          <label className="switch">
                            <input name="parking"
                              type="checkbox"
                              value={this.state.parking}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label>Pet Friendly</label>
                          <label className="switch">
                            <input
                              name="pet_friendly"
                              type="checkbox"
                              value={this.state.pet_friendly}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Internet</label>
                          <label className="switch">
                            <input
                              name="internet"
                              type="checkbox"
                              value={this.state.internet}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Fully Furnished</label>
                          <label className="switch">
                            <input
                              name="furnished"
                              type="checkbox"
                              value={this.state.furnished}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </aside>
            <div className="map-container column is-9">
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
            <aside className="search-menu column is-3 closed">
              <div className="search-menu-container">
                <button id="menu-toggle" onClick={this.toggleMenu.bind(this)}>
                  <i className="fas fa-cog fa-2x"></i>
                </button>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label>Available</label>
                        <input
                          className="input"
                          name="available_date"
                          type="date"
                          value={this.state.available_date}
                          onChange={this.handleInputChange}></input>
                      </div>
                      <div className="field">
                        <label>Rent Amount</label>
                        <div className="columns">
                          <div className="column">
                            <input
                              className="input"
                              name="rent_amount_min"
                              type="number"
                              value={this.state.rent_amount_min}
                              onChange={this.handleInputChange}
                              placeholder="min">
                            </input>
                          </div>
                          <div className="column">
                            <input
                              className="input"
                              name="rent_amount_max"
                              type="number"
                              value={this.state.rent_amount_max}
                              onChange={this.handleInputChange}
                              placeholder="max">
                            </input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <a className="button is-rounded is-large" onClick={this.toggleDraw.bind(this)}>
                        <span className="icon is-medium">
                          <i className="fab fa-bandcamp"></i>
                        </span>
                        <span>Polygon Search</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <span className="searchHeading">Utilities</span>
                  </div>
                  <div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label>Water</label>
                          <label className="switch">
                            <input
                              name="water"
                              type="checkbox"
                              value={this.state.water}
                              onChange={this.handleCheckbox}></input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Eletricity</label>
                          <label className="switch">
                            <input
                              name="eletricity"
                              type="checkbox"
                              value={this.state.eletricity}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label>Heat</label>
                          <label className="switch">
                            <input
                              name="heat"
                              type="checkbox"
                              value={this.state.heat}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Natural Gas</label>
                          <label className="switch">
                            <input
                              name="natural_gas"
                              type="checkbox"
                              value={this.state.natural_gas}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="searchHeading">Amenities</span>
                  </div>
                  <div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label>Storage</label>
                          <label className="switch">
                            <input
                              name="storage"
                              type="checkbox"
                              value={this.state.storage}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Onsite Laundry</label>
                          <label className="switch">
                            <input
                              name="laundry_on_site"
                              type="checkbox"
                              value={this.state.laundry_on_site}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Parking</label>
                          <label className="switch">
                            <input name="parking"
                              type="checkbox"
                              value={this.state.parking}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label>Pet Friendly</label>
                          <label className="switch">
                            <input
                              name="pet_friendly"
                              type="checkbox"
                              value={this.state.pet_friendly}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Internet</label>
                          <label className="switch">
                            <input
                              name="internet"
                              type="checkbox"
                              value={this.state.internet}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="field">
                          <label>Fully Furnished</label>
                          <label className="switch">
                            <input
                              name="furnished"
                              type="checkbox"
                              value={this.state.furnished}
                              onChange={this.handleCheckbox}>
                            </input>
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
                </div>
              </form>
            </aside>
            <div className="map-container column is-9">
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
