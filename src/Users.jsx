import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  getUsers() {
    let users = [];
    axios.get('/api/users')
      .then((response) => {
        users = response.data;
        this.setState({users: users});
        console.log(this.state.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <h2>get users:</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.id} - {user.firstName} {user.lastName}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
