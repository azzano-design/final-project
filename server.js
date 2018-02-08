// import { resolveNs } from 'dns';

const express = require('express');
const pg = require('pg');
const app = express();
const settings = require("./settings");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const geocoder = require('geocoder');


// const configuration = require('./knexfile.js')[development];
// const database = require('knex')(configuration);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server started on port ${port}`));

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/login', (request, response) => {
  console.log("get-users request query", request.query);
  client.query(
    `select * from users where email = $1`,
    [request.query.email],
    (err, result) => {
      if (err) {
        console.error("error running query", err);
        response.json({ err: 'db is fucked, halp' });
      } else if (result.rows.length >= 1) {
        console.log("some users", result.rows.length);
        response.json({ result: result.rows[0] });
      } else {
        console.log("no users");
        response.json({ result: undefined });
      }
    });

});

//login registration
app.post('/api/login', (request, response) => {
  console.log("request body to create user", request.body);

  const { name, email, profile_pic_url } = request.body;
  const query = [name, email, profile_pic_url];

  console.log('HERE HERE', query);
  client.query(`INSERT INTO users(name, email, profile_pic_url) VALUES($1, $2, $3) RETURNING *`,
    query, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      response.status(201).send('new user registered');
    });
});

app.get('/api/rooms', (request, response) => {
  client.query("select * from rooms", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });
});

app.post('/api/rooms', (request, response) => {
  console.log("we are in the post api rooms");
  // hmn, maybe want to JSON.parse ?
  // SELECT * FROM "rooms" WHERE "rooms"."landlordId" = 1000000;
  const landlord_id = 1000000;

  const fullAddress = request.body.street + ' ' + request.body.city + ' BC';

  console.log('fulladdress: ', fullAddress);

  geocoder.geocode(fullAddress, function ( err, data ) {
    if(err){
      console.log("error", err);
    }
    console.log(data.results[0].geometry.location);

    const lat = data.results[0].geometry.location.lat;
    console.log(lat);

    const lng = data.results[0].geometry.location.lng;
    console.log(lng);

    // console.log("post api/rooms got lat/lng:", request.body.lat, request.body.lng);
    const { landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, file } = request.body;

    query = [landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, lat, lng, file];
    console.log(query);
    client.query("INSERT INTO rooms(landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, lat, lng, file) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22 )", query, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      return response.status(201).send('new listing added to database');
    });
  });
});

//search for rooms
app.get('/api/rooms/search', (request, response) => {

});


//search for rooms
app.post('/api/rooms/search', (request, response) => {

});

//load users profile
app.get('/api/users/:id', (request, response) => {
  const user_id = request.params.id;
  const query = [user_id];
  client.query("select * from users where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });
});

//edit users profile
app.post('/api/users/:id', (request, response) => {
  const user_id = request.params.id;
  const { phone_number } = request.body;
  console.log("phone number", request.body.phone_number);
  const query = [user_id, phone_number];
  client.query("UPDATE users SET phone_number =$2 where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });
});

//load rooms for a specific user
app.get('/api/users/:id/rooms', (request, response) => {
  const user_id = request.params.id;

  const query = [user_id];
  client.query("select * from rooms where landlord_id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });
});

//edit a room
app.post('/api/rooms/:id', (request, response) => {

});

//load rooms profile
app.get('/api/rooms/:id', (request, response) => {

});

//load aplications for a specific user
app.get('/api/users/:id/applications', (request, response) => {

});

//post aplication from a specific user
app.post('/api/users/:id/applications', (request, response) => {

});



app.get('/api/users', (request, response) => {
  console.log("request query", request.query);
  const name =  request.query.name;
  const query = [name];
  console.log("query", query);

  client.query("select id from users where name=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });

});
