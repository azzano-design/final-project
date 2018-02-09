import React, { Component } from 'react';

class DetailsForm extends Component {
  onFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.details.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit.bind(this) }>
          <input name='details' placeholder='Description' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default DetailsForm
