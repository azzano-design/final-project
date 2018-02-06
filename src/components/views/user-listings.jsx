import React, {Component} from 'react';
import UserMenu from '../user-menu.jsx';
import fetch from 'node-fetch';

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

  async renderUserListings() {
    const response = await fetch('http://localhost:5000/api/rooms')
    const rooms = await response.json()
    await this.setState({
      rooms: [...rooms]
    })

  }

  componentDidMount() {
    this.renderUserListings();
  }

  render() {
    const currentUser = localStorage.getItem('user');

    const userListing = (address, city) =>  (
      <div className="card">
        <div className="card-content">
          <p>{ address } </p>
          <p>{ city } </p>
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
    console.log('ROOMS LENGTH---->', this.state.rooms)
    return (<div>
      <UserMenu/>
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


      // for loop that renders out the rooms -> all data parsed into userlisting

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
