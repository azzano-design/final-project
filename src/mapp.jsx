import React, {Component} from 'react';


export class Mapp extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    // ...
  }

  render() {
    // ...
  }
}
