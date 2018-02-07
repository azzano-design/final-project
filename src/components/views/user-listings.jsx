import React, { Component } from 'react';
import UserMenu from '../user-menu.jsx';
import fetch from 'node-fetch';
import axios from 'axios'

// Match current user
// filter out listings whose landlord id matches the current user's id.
// current user facebook name matches name in table  - take landlord id
// mathc landlord id using the filter array function.

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
        console.log("response data" + JSON.stringify(response.data));
        const data = response.data;
        console.log("parsed response:", data);
        if (data.err) {
          // oh no, shit is on fire
          callback(data.err);
        } else {
          user_id = data[0].id;
          console.log("user_id", user_id);
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
        // oh no, shit is on fire
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
    console.log("current user name", currentUser.name);
    this.getUserIdByName(currentUser.name, (err, result)=> {
      if(err){
        console.log("error in getUserIdByName", err)
      } else {
        this.getRoomsByUserId(result, (err, result) => {
          if(err){
            console.log("error in getRoomsByUserId", err);
          } else {
            console.log("result getRoomsByUserId", result);
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

    const userListing = (address, city) => (
      <div className="card">
        <div className="card-content">
          <p>{address} </p>
          <p>{city} </p>
          <img src="/images/house.jpg"></img>
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
    )
    return (<div>
      <UserMenu />
      <div className="container">
        <div className="columns">
          <section className="column">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="card">

                    <div className="card-content">
                      <h1>
                        {this.listing}
                      </h1>
                      <img src="/images/house.jpg"></img>
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
                  <div className="applicant card">
                    <div className="level-item">
                      <div className="">
                        <div className="circle level-left level-item">
                          <img src="/images/house.jpg"></img>
                        </div>
                      </div>
                      <div className="column level-item">
                        <span>John Doe</span>
                      </div>
                      <div className="column level-item level-right">
                        <i className="far fa-check-circle fa-2x"></i>
                        <i className="far fa-times-circle fa-2x"></i>
                      </div>
                    </div>
                  </div>
                  <div className="applicant card">
                    <div className="level-item">
                      <div className="">
                        <div className="circle level-left level-item">
                          <img src="/images/house.jpg"></img>
                        </div>
                      </div>
                      <div className="column level-item">
                        <span>John Doe</span>
                      </div>
                      <div className="column level-item level-right">
                        <i className="far fa-check-circle fa-2x"></i>
                        <i className="far fa-times-circle fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  {
                    this.state.rooms.map((item) => {
                      console.log("current user", currentUser);
                       return userListing(item.street, item.city)
                    })
                  }
                  <div className="applicant card">
                    <div className="level-item">
                      <span>No applicants yet...</span>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-content">
                      <i className="fas fa-plus-circle fa-3x"></i>
                    </div>
                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="/#/listing/new">Add new listing</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>)
  }
}

export default UserListings;
