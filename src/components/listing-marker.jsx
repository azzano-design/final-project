import React, {Component} from 'react';

class ListingMarker extends Component {
  render() {
    return (
      <div>
        <div className="circle">
          <a href="/#/listing">
            <img src="/images/house.jpg"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default ListingMarker;
