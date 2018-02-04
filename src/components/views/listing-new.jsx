import React, { Component } from 'react';
import axios from 'axios';

class NewListing extends Component {

  constructor() {
    super();
    this.state = {
      value: false,
      file: '',
      fileBase64String:"",
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const target = event.target;
    console.log(event.target.value);
    if (event.target.value === 'false') {
      this.setState({
        value: true
      });
    }
    else {
      this.setState({
        value: false
      });
    }
  }

  componentDidMount() {
    console.log('component sure as hell mounted');
  }

   _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          // imagePreviewUrl: reader.result
        });
        console.log(reader.result);
      }

      reader.readAsDataURL(file)
    }

  // addListing(event, callback) {
  //   event.preventDefault();
  //   if (!callback) callback = ()=>{};
  //   let data = {
  //     landlord_id:1000000,
  //     details: this.refs.details.value,
  //     street: this.refs.street.value,
  //     unit: this.refs.unit.value,
  //     city: this.refs.city.value,
  //     postal_code: this.refs.postalCode.value,
  //     pet_friendly: this.refs.petFriendly.value,
  //     rent_amount: this.refs.rentAmount.value,
  //     deposit_amount: this.refs.depositAmount.value,
  //     available_date: this.refs.availableDate.value,
  //     water: this.refs.water.value,
  //     eletricity: this.refs.eletricity.value,
  //     internet: this.refs.internet.value,
  //     heat: this.refs.heat.value,
  //     natural_gas: this.refs.naturalGas.value,
  //     storage: this.refs.storage.value,
  //     laundry_on_site: this.refs.freeLaundry.value,
  //     furniture: this.refs.furniture.value,
  //     parking: this.refs.parking.value
  //   }
  //   console.log("data",data);
  //   axios.post('/api/rooms', {
  //     data: data
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     callback(undefined, response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     callback(error);
  //   });
  // }

  addListing(event) {
    event.preventDefault();
    console.log('in method');


    let data = {
      details: this.refs.details.value,
      street: this.refs.street.value,
      unit: this.refs.unit.value,
      city: this.refs.city.value,
      postal_code: this.refs.postalCode.value,
      pet_friendly: this.refs.petFriendly.value,
      rent_amount: this.refs.rentAmount.value,
      deposit_amount: this.refs.depositAmount.value,
      available_date: this.refs.availableDate.value,
      water: this.refs.water.value,
      eletricity: this.refs.eletricity.value,
      internet: this.refs.internet.value,
      heat: this.refs.heat.value,
      natural_gas: this.refs.naturalGas.value,
      storage: this.refs.storage.value,
      laundry_on_site: this.refs.freeLaundry.value,
      furniture: this.refs.furniture.value,
      parking: this.refs.parking.value
    }
    console.log(data);

    // const request = new Request('http://localhost:5000/api/rooms', {
    //   method: 'POST',
    //   headers: new Headers({ "Content-Type": "application/json", 'Accept': 'application/json' }),
    //   body: JSON.stringify(data)
    // });
    // fetch(request)
    //   .then(function (response) {
    //     response.json()
    //       .then(function (data) {
    //         console.log('my data', data);
    //       })
    //   })

  }


  render() {
    return (
      <div>
        <form>
          <div className="field">
            <input name='details' ref='details' placeholder='Description'></input>
          </div>
          <div className="field">
            <input name='street' ref='street' placeholder="street"></input>
          </div>
          <div className="field">
            <input name='unit' ref='unit' placeholder="unit number"></input>
          </div>
          <div className="field">
            <input name='city' ref='city' placeholder="city"></input>
          </div>
          <div className="field">
            <input name='postal_code' ref='postal_code' placeholder="postal Code"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='pet_friendly' ref='pet_friendly' placeholder="pet_friendly"></input>
            {/* <input type="checkbox" value={this.state.value} onChange={this.handleCheckbox} name='familyInRoom' ref='familyInRoom' placeholder="familyInRoom"></input> */}
          </div>
          <div className="field">
            <input name='rent_amount' ref='rent_amount' placeholder="rent Amount"></input>
          </div>
          <div className="field">
            <input name='deposit_amount' ref='deposit_amount' placeholder="deposit Amount"></input>
          </div>
          <div className="field">
            <input name='available_date' ref='available_date' placeholder="available Date"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='water' ref='water' placeholder="water"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='eletricity' ref='eletricity' placeholder="eletricity"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='internet' ref='internet' placeholder="internet"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='heat' ref='heat' placeholder="heat"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='natural_gas' ref='natural_gas' placeholder="natural Gas"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='storage' ref='storage' placeholder="storage"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='laundry_on_site' ref='laundry_on_site' placeholder="laundry on site"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='furniture' ref='furniture' placeholder="furniture"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='parking' ref='parking' placeholder="parking"></input>
          </div>
          <input type="file" onChange={this._handleImageChange.bind(this)} />
        <button className="button is-primary" type="submit" onClick={this.addListing.bind(this)}>Submit</button>
      </form>
    </div>
    )
  }
}

export default NewListing;
// export default GoogleApiWrapper({apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')})(NewListing)
