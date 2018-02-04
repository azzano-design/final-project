import React, {Component} from 'react';

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

  addListing(event) {
    event.preventDefault();
    console.log('in method');


    let data = {
      details: this.refs.details.value,
      address: this.refs.address.value,
      cost: this.refs.cost.value,
      landlord: this.refs.landlord.value,
      street: this.refs.street.value,
      unit: this.refs.unit.value,
      city: this.refs.city.value,
      postalCode: this.refs.postalCode.value,
      familyInRoom: true,
      petFriendly: this.refs.petFriendly.value,
      rentAmount: this.refs.rentAmount.value,
      depositAmount: this.refs.depositAmount.value,
      petAmount: this.refs.petAmount.value,
      availableDate: this.refs.availableDate.value,
      water: this.refs.water .value,
      cablevision: this.refs.cablevision.value,
      eletricity: this.refs.eletricity.value,
      internet: this.refs.internet.value,
      heat: this.refs.heat.value,
      naturalGas: this.refs.naturalGas.value,
      sewageDisposal: this.refs.sewageDisposal.value,
      snowRemoval: this.refs.snowRemoval.value,
      storage: this.refs.storage.value,
      recreation: this.refs.recreation.value,
      garbageCollection: this.refs.garbageCollection.value,
      recyclingServices: this.refs.recyclingServices.value,
      kitchenScrapCollection: this.refs.kitchenScrapCollection.value,
      laundryCoin: this.refs.laundryCoin.value,
      freeLaundry: this.refs.freeLaundry.value,
      refrigerator: this.refs.refrigerator.value,
      dishwasher: this.refs.dishwasher.value,
      stoveOven: this.refs.stoveOven.value,
      windowCoverings: this.refs.windowCoverings.value,
      furniture: this.refs.furniture.value,
      parking: this.refs.parking.value
    }
    console.log(data);

    const request = new Request ('http://localhost:5000/api/rooms', {
      method: 'POST',
      headers: new Headers ({"Content-Type": "application/json", 'Accept': 'application/json'}),
      body: JSON.stringify(data)
    });

    fetch(request)
      .then(function(response){
        response.json()
          .then(function(data) {
            console.log('my data', data);
          })
      })

  }


  render() {
    return (
      <div>
        <form>
          <div className="field">
            <input name='details' ref='details' placeholder='Description'></input>
          </div>
          <div className="field">
            <input name='address' ref='address' placeholder='Address'></input>
          </div>
          <div className="field">
            <input name='cost' ref='cost' placeholder='Cost'></input>
          </div>
          <div className="field">
            <input name='landlord' ref='landlord' placeholder='Landlord'></input>
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
            <input name='postalCode' ref='postalCode' placeholder="postalCode"></input>
          </div>
          <div className="field">
            <input type="checkbox" value={this.state.value} onChange={this.handleCheckbox} name='familyInRoom' ref='familyInRoom' placeholder="familyInRoom"></input>
          </div>
          <div className="field">
            <input name='petFriendly' ref='petFriendly' placeholder="petFriendly"></input>
          </div>
          <div className="field">
            <input name='rentAmount' ref='rentAmount' placeholder="rentAmount"></input>
          </div>
          <div className="field">
            <input name='depositAmount' ref='depositAmount' placeholder="depositAmount"></input>
          </div>
          <div className="field">
            <input name='petAmount' ref='petAmount' placeholder="petAmount"></input>
          </div>
          <div className="field">
            <input name='availableDate' ref='availableDate' placeholder="availableDate"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='water' ref='water' placeholder="water"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='cablevision' ref='cablevision' placeholder="cablevision"></input>
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
            <input type="checkbox" name='naturalGas' ref='naturalGas' placeholder="naturalGas"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='sewageDisposal' ref='sewageDisposal' placeholder="sewageDisposal"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='snowRemoval' ref='snowRemoval' placeholder="snowRemoval"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='storage' ref='storage' placeholder="storage"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='recreation' ref='recreation' placeholder="recreation"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='garbageCollection' ref='garbageCollection' placeholder="garbageCollection"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='recyclingServices' ref='recyclingServices' placeholder="recyclingServices"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='kitchenScrapCollection' ref='kitchenScrapCollection' placeholder="kitchenScrapCollection"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='laundryCoin' ref='laundryCoin' placeholder="laundryCoin"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='freeLaundry' ref='freeLaundry' placeholder="freeLaundry"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='refrigerator' ref='refrigerator' placeholder="refrigerator"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='dishwasher' ref='dishwasher' placeholder="dishwasher"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='stoveOven' ref='stoveOven' placeholder="stoveOven"></input>
          </div>
          <div className="field">
            <input type="checkbox" name='windowCoverings' ref='windowCoverings' placeholder="windowCoverings"></input>
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
