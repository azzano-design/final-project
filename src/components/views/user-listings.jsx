import React, {Component} from 'react';
import UserMenu from '../user-menu.jsx';

class UserListings extends Component {

  async renderUserListings() {

  }

  componentDidMount() {
    this.renderUserListings();
  }


  render() {
    return (
      <div>
        <UserMenu />
        <div className="container">
          <div className="columns">
            <section className="column">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="card">
                      <div className="card-content">
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
                    <div className="card">
                      <div className="card-content">
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
      </div>
    )
  }
}

export default UserListings;