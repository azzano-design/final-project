import React, { Component } from 'react';
import UserMenu from '../user-menu.jsx';
import fetch from 'node-fetch';
import axios from 'axios';

class UserListings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      landlord_id: '',
      address: '',
      rooms: []
    }
  }

  async getUserIdByName(userName ,callback) {
    if (!callback) callback = ()=>{};
    let user_id = undefined;
    await axios.get('http://localhost:5000/api/users',
      {
        params: {
          name: userName
        }
      })
      .then((response) => {
        const data = response.data;
        if (data.err) {
          callback(data.err);
        } else {
          user_id = data[0].id;
          callback(undefined, user_id);
        }
      })
      .catch((error) => {
        console.log("mess in getUserIdByName", error);
      });
  }

  async getRoomsByUserId(userId, callback) {
    if (!callback) callback = ()=>{};
    let rooms = [];
    await axios.get(`http://localhost:5000/api/users/${userId}/rooms`)
    .then((response) => {
      const data = response.data;
      if (data.err) {
        callback(data.err);
      } else {
        rooms = data;
        callback(undefined, rooms);
      }
    })
    .catch((error) => {
      console.log("mess in getRoomsByUserId", error);
    });
  }

  async renderUserListings() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.getUserIdByName(currentUser.name, (err, result)=> {
      if(err){
        console.log("error in getUserIdByName", err)
      } else {
        this.getRoomsByUserId(result, (err, result) => {
          if(err){
            console.log("error in getRoomsByUserId", err);
          } else {
            result.forEach((room) => {
              this.setState({
                rooms: this.state.rooms.concat(room)
              })
            })
          }
        })
      }

    });
  }

  componentDidMount() {
    this.renderUserListings();
  }

  render() {
    const currentUser = localStorage.getItem('user');

    const userListing =
      (address, city) => (
        <div className="column">
          <div className="card">
            <div className="listing-single">
              <div className="listing-header">
                <span className="listing-title">{address}</span>
                <div className="listing-image-container">
                  <div className="listing-image-filter"></div>
                  <img src="/images/house.jpg" alt="Placeholder image" className="listing-image"></img>
                  <span className="listing-price">$ RENT</span>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <a href="#" className="button is-warning">Edit Listing</a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  <a href="#" className="button is-danger">Remove Listing</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
    )
    return (
    <div>
      <UserMenu />
      <div className="animated fadeIn">
        <div className="sideScroll columns">
          {
            this.state.rooms.map((item) => {
              return userListing(item.street, item.city)
            })
          }
          <div className="sideScroll-inner"></div>
        </div>
      </div>
    </div>
    )
  }
}

export default UserListings;
