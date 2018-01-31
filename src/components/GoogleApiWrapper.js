import React, { Component } from 'react';
import { render } from 'react-dom';
import DetailsForm  from './detailsform'
import {InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
import GoogleMapDrawFilter from "react-google-map-draw-filter";



export class MapContainer extends Component {
//   constructor () {
//     super();
//     this.state = {
//       drawMode:false,
//       loaded:false,
//     };
//   }
//   handleReturnedMarkers(markers) {
//     this.setState({
//       activeMarkers: markers
//     });
//   }
//   render() {
//       const style = {
//         width: '100%',
//         height: '100%'
//       }
//       // added this for polygon
//       const markers = [{info:' Marker1', label:'A',
//         latLng:{lat:49.282729, lng:-123.120738}},
//         {info:' Marker2', label:'B',latLng:{lat:49.282729, lng:-123.120738}}];
//
//
//       return (
//         // <div>
//       //
//       //
//       //   // <Map google={window.google}
//       //   //   style={style}
//       //   //   initialCenter={{
//       //   //     lat: 49.282729,
//       //   //     lng: -123.120738
//       //   //   }}
//       //   //   zoom={14}
//       //   //   >
//       //     //
//       //     // <GoogleMapDrawFilter
//       //     //   apiKey='AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI'
//       //     //   drawMode={true}
//       //     //   markers={markers}
//       //     //   handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
//       //     //   />
//       //
//       //   // </Map>
//       //   </div>\
//       <div>
//         <button onClick={this.toggleDraw.bind(this)}>toggleDraw</button>
//         <div className="App">
//
//           <GoogleMapDrawFilter
//             drawMode={this.state.drawMode}
//             markers={markers}
//             handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
//             onMarkerClick={this.onMarkerClick.bind(this)}
//             apiKey='AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI'
//           />
//
//         </div>
//         <h1>{this.renderMarkerInfo.bind(this)()}</h1>
//       </div>
//
//       );
//   }
// }

constructor (props) {
  super(props);
  this.state = {
    drawMode:false,
    loaded:false,
    activeMarkers: [],
    address: '',
    markers: [
        // {
        //   info:'- Marker1',
        //   label:'A',
        //   title:'hello',
        //   latLng:{lng:-123.097665,lat:49.264254}
        // },
        //
        // {
        //   label:'B',
        //   info:'- Marker2',
        //   latLng:{lng:-123.104124,lat: 49.266416}
        // },
        //
        // {
        //   label:'C',
        //   info:'- Marker 3',
        //   latLng:{lng:-123.117943 ,lat:49.278747}
        // },
        //
        // // {
        // //   label:'D',
        // //   info:'- Marker 4',
        // //   latLng:{lng:-123.126311 ,lat:49.278988}
        // // },
        //
        // {
        //   label:'E',
        //   info:'- Marker 5',
        //   latLng:{lng:-123.132362 ,lat:49.275147}
        // }
      ]
  };
}
componentDidMount(){
  // setTimeout(() => {
  //   const {markers} = this.state;
  //   this.setState({markers: [...markers, {
  //             label:'D',
  //             info:'- Marker 4',
  //             latLng:{lng:-123.126311 ,lat:49.278988},
  //           }]});
  //
  // }, 3000);
}

addMarker(label, info, lat, long) {
  const { markers } = this.state;
  const newMarker = { label, info, latLng: { lng: long, lat } };

  this.setState({
    markers: [
      ...markers, newMarker
    ]
  });
}

onMarkerClick(marker,e){
  const infowindow = new google.maps.InfoWindow({
    content: `<div id='details'></div>`
  });

  google.maps.event.addListener(infowindow, 'domready', function() {
    return (<DetailsForm />, document.getElementById('details'));
  });

  infowindow.open(marker.map, marker);

  this.setState({
    activeMarkers : [marker]
  });
}

renderMarkerInfo() {
  if (this.state.activeMarkers) {
    return this.state.activeMarkers.map((marker,i)=>(
      <div key={`marker${i}`}>
        {marker.label}
        {marker.info}
      </div>)
    );
  }
}

handleReturnedMarkers(markers) {
  this.setState({
    activeMarkers: markers
  });
  console.log("states", this.state.activeMarkers);

}

toggleDraw(){
  this.setState({
    drawMode:!this.state.drawMode ,
  });
}

handleChange(event) {
  this.setState({address: event.target.value});
  console.log(this.state.address);
}

handleSubmit(ev) {
  ev.preventDefault();
  /// this.state.address;
  // pass the address to geocoder => lat lng
  // let coor = geocoder(this.state.address);
  // Geocoding
  // geocoder.geocode("13864 116 ave surrey, BC", function ( err, data ) {
  //   console.log(data.results[0].geometry.location);
  //   // do something with data
  // });

  console.log(this.state.address);
  const geocoder = new window.google.maps.Geocoder();
  geocoder.geocode({ address: this.state.address }, (results, status) => {
    const location = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng()
    };

    this.addMarker('Listing', '', location.lat, location.lng);
  });


  // update this.state.activeMarkers
  // this.setState({activeMarkers: this.state.activeMarkers.push(newMarker)})
  // this.setState({address: ''});
}

render() {
  const styles = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // change map size
  const mapStyle = {
    height: '700px',
    width: '1000px',
    }

    //change map default focus
  const mapConfig={
  zoom:14,
  lat:49.275147,
  lng:-123.132362,
  }

  const markers = [
      // {
      //   info:'- Marker1',
      //   label:'A',
      //   title:'hello',
      //   latLng:{lng:-123.097665,lat:49.264254}
      // },
      //
      // {
      //   label:'B',
      //   info:'- Marker2',
      //   latLng:{lng:-123.104124,lat: 49.266416}
      // },
      //
      // {
      //   label:'C',
      //   info:'- Marker 3',
      //   latLng:{lng:-123.117943 ,lat:49.278747}
      // },
      //
      // // {
      // //   label:'D',
      // //   info:'- Marker 4',
      // //   latLng:{lng:-123.126311 ,lat:49.278988}
      // // },
      //
      // {
      //   label:'E',
      //   info:'- Marker 5',
      //   latLng:{lng:-123.132362 ,lat:49.275147}
      // },

    ];

    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
      <div className="App">

        <GoogleMapDrawFilter
          style={styles}
          drawMode={this.state.drawMode}
          markers={this.state.markers}
          mapConfig={mapConfig}
          mapStyle={mapStyle}
          handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
          onMarkerClick={this.onMarkerClick.bind(this)}
          apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
        />

      </div>

      <h1>{this.renderMarkerInfo.bind(this)()}</h1>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
            Address:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            Description
          <input type="text" />

        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>

      </form>
    </div>
  );
}
}

 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
