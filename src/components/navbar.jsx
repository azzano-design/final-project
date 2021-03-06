import React, {Component} from 'react';
import FacebookLogin from './fb-login.jsx';

class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
      return (
        <div>
          <section className="hero is-primary is-medium">
            <div className="hero-head">
              <div className="navbar main-nav">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item" href="/#/">
                      <img src='images/logo.png' alt="10/Tenant" className="level-item"></img>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div className="navbar-end">
                    <FacebookLogin />
                  </div>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Navbar;