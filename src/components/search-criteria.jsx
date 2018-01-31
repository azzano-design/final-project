import React, {Component} from 'react';

class SearchCriteria extends Component {
  render() {
    return (
      <aside className="column is-3">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Alex Smith"></input>
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
      </aside>
    )
  }
}

export default SearchCriteria