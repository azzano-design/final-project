import React from 'react';
const Base = React.createClass({
  render: function () {
    return (
      <div>
        <h1> Header</h1>
        {this.props.children}
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    )
  }
});

export { Base };