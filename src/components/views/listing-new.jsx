import React, {Component} from 'react';

class NewListing extends Component {
  constructor() {
    super();

    this.state = {
      title: 'list your room'
    }
  }
  componentDidMount() {
    console.log('component sure as hell mounted');
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
      familyInRoom: this.refs.familyInRoom.value,
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
            <input name='familyInRoom' ref='familyInRoom' placeholder="familyInRoom"></input>
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
            <input name='water' ref='water' placeholder="water"></input>
          </div>
          <div className="field">
            <input name='cablevision' ref='cablevision' placeholder="cablevision"></input>
          </div>
          <div className="field">
            <input name='eletricity' ref='eletricity' placeholder="eletricity"></input>
          </div>
          <div className="field">
            <input name='internet' ref='internet' placeholder="internet"></input>
          </div>
          <div className="field">
            <input name='heat' ref='heat' placeholder="heat"></input>
          </div>
          <div className="field">
            <input name='naturalGas' ref='naturalGas' placeholder="naturalGas"></input>
          </div>
          <div className="field">
            <input name='sewageDisposal' ref='sewageDisposal' placeholder="sewageDisposal"></input>
          </div>
          <div className="field">
            <input name='snowRemoval' ref='snowRemoval' placeholder="snowRemoval"></input>
          </div>
          <div className="field">
            <input name='storage' ref='storage' placeholder="storage"></input>
          </div>
          <div className="field">
            <input name='recreation' ref='recreation' placeholder="recreation"></input>
          </div>
          <div className="field">
            <input name='garbageCollection' ref='garbageCollection' placeholder="garbageCollection"></input>
          </div>
          <div className="field">
            <input name='recyclingServices' ref='recyclingServices' placeholder="recyclingServices"></input>
          </div>
          <div className="field">
            <input name='kitchenScrapCollection' ref='kitchenScrapCollection' placeholder="kitchenScrapCollection"></input>
          </div>
          <div className="field">
            <input name='laundryCoin' ref='laundryCoin' placeholder="laundryCoin"></input>
          </div>
          <div className="field">
            <input name='freeLaundry' ref='freeLaundry' placeholder="freeLaundry"></input>
          </div>
          <div className="field">
            <input name='refrigerator' ref='refrigerator' placeholder="refrigerator"></input>
          </div>
          <div className="field">
            <input name='dishwasher' ref='dishwasher' placeholder="dishwasher"></input>
          </div>
          <div className="field">
            <input name='stoveOven' ref='stoveOven' placeholder="stoveOven"></input>
          </div>
          <div className="field">
            <input name='windowCoverings' ref='windowCoverings' placeholder="windowCoverings"></input>
          </div>
          <div className="field">
            <input name='furniture' ref='furniture' placeholder="furniture"></input>
          </div>
          <div className="field">
            <input name='parking' ref='parking' placeholder="parking"></input>
          </div>

        <button className="button is-primary" type="submit" onClick={this.addListing.bind(this)}>Submit</button>
      </form>
    </div>
    )
  }
}

export default NewListing;