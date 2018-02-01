import React, {Component} from 'react';
import Users from './Users.jsx'
import GoogleApiWrapper from './components/GoogleApiWrapper'

class App extends Component {
  render() {

    return (
      <div>
        <h1>Hello React World!</h1>
        <Users />
        <GoogleApiWrapper center={location} />
      </div>
    );
  }
}


export default App;
