import React, {Component} from 'react';
import UserMenu from '../user-menu.jsx';

class UserApplications extends Component {
  render() {
    return (
      <div>
        <UserMenu/>
        <div className="container">
          <div className="columns">
            <section className="column">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="card">
                      <div className="columns">
                        <div className="column">
                          <a href="#" className="button is-warning">Application Pending</a>
                          <img src="/images/house.jpg"></img>
                        </div>
                        <div className="column">
                          <h2>3 bedroom</h2>
                          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
                          <a href="#" className="button is-primary">Review Listing</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="is-centered">
                      <a href="#">Search Listing</a>
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

export default UserApplications;