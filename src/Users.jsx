import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // fetch('http://localhost:5000/api/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({users}, ( () => console.log('Users fetched..', users))));
  }

  render() {
    return (
      <div>
        <h1>Users:</h1>
        <ul>
          {this.state.users.map(user =>
          <li key={user.id}>{user.id} - {user.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
