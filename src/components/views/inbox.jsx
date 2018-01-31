import React, {Component} from 'react';

class Inbox extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="columns">
            <section className="column">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="card">
                      <div className="columns">
                        <div className="column">
                          <img src="/images/house.jpg"></img>
                          <h2>3 bedroom</h2>
                          <p>John Doe</p>
                          <a href="#" className="button is-primary">Review Listing</a>
                        </div>
                        <div className="column">
                          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        </div>
                      </div>
                    </div>
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

export default Inbox;