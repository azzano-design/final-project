import React, {Component} from 'react';

class Listing extends Component {
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
                        </div>
                        <div className="column">
                          <h2>3 bedroom</h2>
                          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
                          <a href="#" className="button is-primary">Apply</a>
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

export default Listing;