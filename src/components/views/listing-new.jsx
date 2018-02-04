import React, { Component } from 'react';
import axios from 'axios';

class NewListing extends Component {

  constructor() {
    super();
    this.state = {
      details: undefined,
      street: undefined,
      unit: undefined,
      city: undefined,
      postal_code: undefined,
      pet_friendly: false,
      rent_amount: undefined,
      deposit_amount: undefined,
      available_date: undefined,
      water: false,
      eletricity: false,
      internet: false,
      heat: false,
      natural_gas: false,
      storage: false,
      laundry_on_site: false,
      furniture: false,
      parking: false,
      file: "",
      fileBase64String: "",
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addListing = this.addListing.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleCheckbox(event) {
    const name = event.target.name;
    if (this.state[name] === false) {
      this.setState({
        [name]: true
      });
    }
    else {
      this.setState({
        [name]: false
      });
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleImageChange(event) {
    event.preventDefault();
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


  checkRequiredFields() {
    const listing = this.state;
    const required_fields = ['street', 'city', 'rent_amount', 'available_date'];
    for (let field of required_fields) {
      console.log(`listing.${field}`, listing[field]);
      if (!listing[field]) {
        alert(`${field} is required.`);
        return false;
      }
    }
    return true;
  }

  addListing(event) {
    event.preventDefault();
    const listing = this.state;
    if (this.checkRequiredFields()) {
      axios.post('api/rooms', {
        details: listing.details,
        street: listing.street,
        unit: listing.unit,
        city: listing.city,
        postal_code: listing.postal_code,
        pet_friendly: listing.pet_friendly,
        rent_amount: listing.rent_amount,
        deposit_amount: listing.deposit_amount,
        available_date: listing.available_date,
        water: listing.water,
        eletricity: listing.eletricity,
        internet: listing.internet,
        heat: listing.heat,
        natural_gas: listing.natural_gas,
        storage: listing.storage,
        laundry_on_site: listing.laundry_in_site,
        furniture: listing.furniture,
        parking: listing.parking,
        file: listing.file
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Details:
          <input
              name="details"
              type="text"
              value={this.state.details}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Street:
          <input
              name="street"
              type="text"
              value={this.state.street}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Unit:
          <input
              name="unit"
              type="text"
              value={this.state.unit}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            City:
          <input
              name="city"
              type="text"
              value={this.state.city}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Postal Code:
          <input
              name="postal_code"
              type="text"
              value={this.state.postal_code}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Rent amount:
          <input
              name="rent_amount"
              type="number"
              value={this.state.rent_amount}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Deposit amount:
          <input
              name="deposit_amount"
              type="number"
              value={this.state.deposit_amount}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Available date:
          <input
              name="available_date"
              type="date"
              value={this.state.available_date}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Pet friendly:
          <input
              name="pet_friendly"
              type="checkbox"
              value={this.state.pet_friendly}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Water:
          <input
              name="water"
              type="checkbox"
              value={this.state.water}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Eletricity:
          <input
              name="eletricity"
              type="checkbox"
              value={this.state.eletricity}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Internet:
          <input
              name="internet"
              type="checkbox"
              value={this.state.internet}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Eletricity:
          <input
              name="eletricity"
              type="checkbox"
              value={this.state.eletricity}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Heat:
          <input
              name="heat"
              type="checkbox"
              value={this.state.heat}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Natural Gas:
          <input
              name="natural_gas"
              type="checkbox"
              value={this.state.natural_gas}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Storage:
          <input
              name="storage"
              type="checkbox"
              value={this.state.storage}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Laundry on site:
          <input
              name="laundry on site"
              type="checkbox"
              value={this.state.laundry_on_site}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Furniture:
          <input
              name="furniture"
              type="checkbox"
              value={this.state.furniture}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <label>
            Parking:
          <input
              name="parking"
              type="checkbox"
              value={this.state.parking}
              onChange={this.handleCheckbox} />
          </label>
          <br />
          <input type="file" onChange={this.handleImageChange} />
          <br /><br />         
          <button className="button is-primary" type="submit" onClick={this.addListing}>Submit</button>

        </form>
      </div>
    )
  }
}

export default NewListing;
// export default GoogleApiWrapper({apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')})(NewListing)
