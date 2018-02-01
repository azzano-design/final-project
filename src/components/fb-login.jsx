import React, {Component} from 'react';

class FacebookLogin extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    }
  }

  facebookInit() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '175711163181508',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });
  
      FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      });
  
    };
  
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.setState({isLogged: true})
      console.log("islogged", this.state.isLogged)
      this.testAPI();
    }
    else {
      this.setState({isLogged: false});
      console.log("islogged", this.state.isLogged)
      console.log("Not authenticated");
    }
  }

  componentDidMount() {
    this.facebookInit();
  }

  logout(){
    FB.getLoginStatus((response) => {
      if(response && response.status === 'connected') {
        FB.logout((response) => {
          this.setState({isLogged: false})
          console.log(this.state.isLogged)
       });
      }
    });
  }

  testAPI() {
    FB.api('/me?fields=name,email,picture.width(160).height(160)', function(response) {
      if (response && !response.error) {
        console.log(response)
      }
    })
  }

  checkLoginState() {
    FB.getLoginStatus(function (response) {
      this.statusChangeCallback(response);
    });
  }

  
  render() {
    return (
    <div>
      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" onClick={this.checkLoginState.bind(this)}></div>
      <span onClick={this.logout.bind(this)}>logout</span>
    </div>
    );
  }

}

export default FacebookLogin;