var geocoder = require('geocoder');

// Geocoding
geocoder.geocode("13864 116 ave surrey, BC", function ( err, data ) {
  console.log(data.results[0].geometry.location);
  // do something with data
});

// // Reverse Geocoding
// geocoder.reverseGeocode( 33.7489, -84.3789, function ( err, data ) {
//   console.log(data);
//   // do something with data
// });
