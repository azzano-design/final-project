import React, {Component} from 'react';
import FacebookLogin from './fb-login.jsx';


class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary is-medium">
          <div className="hero-head">
            <div className="navbar main-nav">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img src='images/logo.png' alt="10/Tenant" className="level-item"></img>
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <FacebookLogin />
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <a href="/#/search" className="navbar-item">
                      <i className="fas fa-search fa-lg"></i>Search
                    </a>
                    <a href="/#/inbox" className="navbar-item">
                      <i className="fas fa-inbox fa-lg"></i>Inbox
                    </a>
                    <a href="/#/user/settings" className="navbar-item">
                      <i className="fas fa-user-circle fa-lg"></i> Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
