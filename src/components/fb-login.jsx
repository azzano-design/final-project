import React, { Component } from 'react';
import LoginMenu from './login-menu.jsx';
import axios from 'axios';

class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      currentUser: {
        id: null,
        name: '',
        email: '',
        phoneNumber: '',
        profilePicURL: ''
      }
    }
  }

  statusChangeCallback(response) {
    let result;
    if (response.status === 'connected') {
      this.setState({ isLogged: true })
      console.log("islogged", this.state.isLogged);
      this.connectAPI(() => {
        console.log("state ->", this.state);
        this.getUserbyEmail(
          this.state.currentUser.email,
          (err, result) => {
            if (err) {
              console.log("oh god, why why why, err")
            } else {
              if (result) {
                // we have a user?  why do we have a user?  goddammit!!!!!!!!!!!!!!!!!!!!
              } else {
                this.setNewUser(
                  this.state.currentUser.name,
                  this.state.currentUser.email,
                  this.state.currentUser.profilePicURL);
                // local storage
              }
            }
          }
        );
      });
    } else {
      this.setState({ isLogged: false });
      console.log("islogged", this.state.isLogged);

      console.log("Not authenticated");
    }
  };

  componentDidMount() {

    window.fbAsyncInit = () => {
      FB.init({
        appId: '330704774106294',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

      window.FB.Event.subscribe('auth.statusChange', (response) => {
        this.statusChangeCallback(response);
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  getUserbyEmail(userEmail, callback) {
    axios.get('/api/login', {
      params: {
        email: userEmail
      }
    })
    .then((response) => {
      console.log("response data" + JSON.stringify(response.data));
      // var data = JSON.parse(response.data);
      var data = response.data;
      console.log("parsed response:", data);
      if (data.err) {
        // oh no, shit is on fire
        callback(data.err);
      } else {
        var user = data.result;
        callback(undefined, user);
      }
    })
    .catch((error) => {
      console.log("mess in getUserByEmail", error);
    });
  }

  setNewUser(userName, userEmail, profilePicURL, callback){
    if (!callback) callback = ()=>{};
    axios.post('/api/login', {
      name: userName,
      email: userEmail,
      profile_pic_url: profilePicURL
    })
    .then(function (response) {
      console.log('setNewUser',response);
      callback(undefined, response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
  }

  checkLoginState() {
    FB.getLoginStatus((response) => {
      console.log('res', response);
      this.statusChangeCallback(response);
    });
  }

  logout() {
    FB.getLoginStatus((response) => {
      if (response && response.status === 'connected') {
        FB.logout((response) => {
          this.setState({ isLogged: false })
          console.log(this.state.isLogged)
        });
      }
    });
  }

  connectAPI(callback) {
    FB.api('/me?fields=name,email,picture.width(160).height(160)', (response) => {
      if (response && !response.error) {
        this.setState({currentUser: {name: response.name, email: response.email, profilePicURL: response.picture.data.url } });
        console.log("current user", this.state.currentUser)
        let user =  {
          name: 'konrad'
        }
        localStorage.setItem('user', JSON.stringify(this.state.currentUser));
      }
      callback();

    })
  }

  render() {
    if (this.state.isLogged === false){
      return (
        <div>
          <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" onClick={this.checkLoginState.bind(this)}></div>
        </div>
      );
    } else {
      return (
        <div>

          <LoginMenu user={this.state.currentUser} logout={this.logout.bind(this)}/>

        </div>
      )
    }
  }
}

export default FacebookLogin;
