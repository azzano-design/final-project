import React, {Component} from 'react';
import UserMenu from '../user-menu.jsx';
import axios from 'axios';

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:  JSON.parse(localStorage.getItem('user'))
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log("event.target.value", event.target.value);
    if(!event.target.value){
      event.target.value = "";
    }
    this.setState({
      user: {
        id: this.state.user.id,
        name: this.state.user.name,
        email: this.state.user.email,
        profilePicURL: this.state.user.profilePicURL,
        phoneNumber: event.target.value
      }
    });
  }

  submitPhoneNumber(event){
    event.preventDefault();
    let phone_number = this.state.user.phoneNumber;
    const user_id = this.state.user.id
    axios.post(`http://localhost:5000/api/users/${user_id}`,  {phone_number: phone_number})
    .then((result) => {
      console.log('result', result);
    })
  }

  render() {
    {console.log('local user',localStorage.getItem('user'))}
    {console.log('state user', this.state.user)}
    return (
      <div>
        <UserMenu/>

        <div className="container">
          <div className="columns">
            <section className="column">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <form onSubmit={this.submitPhoneNumber.bind(this)}>
                      <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                          <div className="profileCircle">
                            <img src={this.state.user.profilePicURL} />
                          </div>
                          <h1> {this.state.user.name} </h1>
                          <span>{this.state.user.email} </span>
                          <div className="field">
                            <label className="label">Phone Number</label>
                            <div className="control">
                            <input className="input" type="tel" placeholder="e.g. 1-604-123-1214" size="10" value={this.state.user.phoneNumber || ""}  onChange={this.handleInputChange} ></input>
                            </div>
                          </div>
                          <div className="control">
                            <button className="button is-primary is-large is-rounded">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default UserSettings;
