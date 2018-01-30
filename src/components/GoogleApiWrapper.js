import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, withScriptjs, GoogleMap} from 'google-maps-react';
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

constructor () {
  super();
  this.state = {
    drawMode:false,
    loaded:false,
    activeMarkers: [],
  };
}
onMarkerClick(marker,e){
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
}
toggleDraw(){
  this.setState({
    drawMode:!this.state.drawMode ,
  });
}

render() {
  const styles = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // change map size
  const mapStyle = {
    height: '1000px',
    width: '1000px',
    }

    //change map default focus
  const mapConfig={
  zoom:14,
  lat:49.275147,
  lng:-123.132362,
  }

  const markers = [
      {
        info:'- Marker1',
        label:'A',
        title:'hello',
        latLng:{lng:-123.097665,lat:49.264254}
      },

      {
        label:'B',
        info:'- Marker2',
        latLng:{lng:-123.104124,lat: 49.266416}
      },

      {
        label:'C',
        info:'- Marker 3',
        latLng:{lng:-123.117943 ,lat:49.278747}
      },

      {
        label:'D',
        info:'- Marker 4',
        latLng:{lng:-123.126311 ,lat:49.278988}
      },

      {
        label:'E',
        info:'- Marker 5',
        latLng:{lng:-123.132362 ,lat:49.275147}
      },

    ];


    return (<div>
      <button onClick={this.toggleDraw.bind(this)}>Polygon Search</button>
      <div className="App">

        <GoogleMapDrawFilter
          style={styles}
          drawMode={this.state.drawMode}
          markers={markers}
          mapConfig={mapConfig}
          mapStyle={mapStyle}
          handleReturnedMarkers={this.handleReturnedMarkers.bind(this)}
          onMarkerClick={this.onMarkerClick.bind(this)}
          apiKey='AIzaSyADYWSlC4yEedJ-5lvQb9UFOVaMMux54Zc'
        />

      </div>
      <h1>{this.renderMarkerInfo.bind(this)()}</h1>
    </div>
  );
}
}

 export default GoogleApiWrapper({
   apiKey: ('AIzaSyB8uJxSx8YzDb-Nm8CP9KB-egJe3mZF7OI')
})(MapContainer)
