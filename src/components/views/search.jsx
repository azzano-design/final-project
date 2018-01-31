import React, {Component} from 'react';
import ListingMarker from '../listing-marker.jsx';
import SearchCriteria from '../search-criteria.jsx';

class Search extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="columns">
            <SearchCriteria />
            <section className="column is-9 map">
              <div className="container">
                <ListingMarker/>
                <ListingMarker/>
                <ListingMarker/>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;