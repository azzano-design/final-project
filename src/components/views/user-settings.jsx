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
                      <div className="field">
                        <label className="label" for="FirstName">First Name</label>
                        <div className="control">
                          <input className="input" type="text" name="FirstName" placeholder={this.state.user.name}></input>
                        </div>
                        <div>
                          <h1> {this.state.user.name} </h1>
                          <img src={this.state.user.profilePicURL} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" for="PhoneNumber">Phone Number</label>
                        <div className="control">
                          <input className="input" type="number" name="PhoneNumber" placeholder="1-123-123-123"></input>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
                        </div>
                      </div>
                      <div className="control">
                        <div className="select">
                          <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                      <div className="field has-addons">
                        <p className="control">
                          <span className="select">
                            <select>
                              <option>$</option>
                              <option>£</option>
                              <option>€</option>
                            </select>
                          </span>
                        </p>
                        <p className="control">
                          <input className="input" type="text" placeholder="Amount of money"></input>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="column">
                    <form>
                      <div className="field">
                        <label className="label" for="LastName">Last Name</label>
                        <div className="control">
                          <input className="input" type="text" name="LastName" placeholder="e.g Alex Smith"></input>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
                        </div>
                      </div>
                      <div className="control">
                        <div className="select">
                          <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                      <div className="field has-addons">
                        <p className="control">
                          <span className="select">
                            <select>
                              <option>$</option>
                              <option>£</option>
                              <option>€</option>
                            </select>
                          </span>
                        </p>
                        <p className="control">
                          <input className="input" type="text" placeholder="Amount of money"></input>
                        </p>
                      </div>
                      <div className="control">
                        <button className="button is-primary">Submit</button>
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
