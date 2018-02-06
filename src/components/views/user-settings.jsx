import React, {Component} from 'react';
import UserMenu from '../user-menu.jsx';

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:  JSON.parse(localStorage.getItem('user'))
    }
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
                    <form>
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
                              <input className="input" type="phone" placeholder="e.g. 1-604-123-1214"></input>
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
