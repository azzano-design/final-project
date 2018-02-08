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

app.use(function (req, res, next) {
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
  client.query(
    `select * from users where email = $1`,
    [request.query.email],
    (err, result) => {
      if (err) {
        console.error("error running query", err);
        response.json({ err: 'db is fucked, halp' });
      } else if (result.rows.length >= 1) {
        response.json({ result: result.rows[0] });
      } else {
        response.json({ result: undefined });
      }
    });

});

//login registration
app.post('/api/login', (request, response) => {

  const { name, email, profile_pic_url } = request.body;
  const query = [name, email, profile_pic_url];

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
    response.json(result.rows);
  });
});

app.post('/api/rooms', (request, response) => {
  console.log("we are in the post api rooms");

  const fullAddress = request.body.street + ' ' + request.body.city + ' BC';

  console.log('fulladdress: ', fullAddress);

  geocoder.geocode(fullAddress, function (err, data) {
    if (err) {
      console.log("error", err);
    }

    const lat = data.results[0].geometry.location.lat;

    const lng = data.results[0].geometry.location.lng;

    const { landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, file } = request.body;

    query = [landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, lat, lng, file];

    client.query("INSERT INTO rooms(landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, lat, lng, file) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22 )", query, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      return response.status(201).json(result.rows);
    });
  });
});

//search for rooms by id
app.get('/api/rooms/:id', (request, response) => {
  const room_id = request.params.id;
  const query = [room_id];
  client.query("select * from rooms where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    response.json(result.rows);
  });
});

//load users profile
app.get('/api/users/:id', (request, response) => {
  const user_id = request.params.id;
  const query = [user_id];
  client.query("select * from users where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    response.json(result.rows);
  });
});

//edit users profile
app.post('/api/users/:id', (request, response) => {
  const user_id = request.params.id;
  const { phone_number } = request.body;
  const query = [user_id, phone_number];
  client.query("UPDATE users SET phone_number =$2 where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
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
    response.json(result.rows);
  });
});

//edit a room
app.post('/api/rooms/:id/update', (request, response) => {
  console.log("inside update room route");
  const room_id = request.query.id;

  const fullAddress = request.body.street + ' ' + request.body.city + ' BC';


  geocoder.geocode(fullAddress, function (err, data) {
    if (err) {
      console.log("error", err);
    }

    const lat = data.results[0].geometry.location.lat;

    const lng = data.results[0].geometry.location.lng;

    const { landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, file } = request.body;

    query = [landlord_id, landlord_email, details, street, unit, city, postal_code, pet_friendly, rent_amount, available_date, water, eletricity, internet, heat, natural_gas, storage, laundry_on_site, furniture, parking, lat, lng, file, room_id];

    client.query("UPDATE rooms SET landlord_id =$1, landlord_email = $2, details = $3, street = $4, unit= $5, city= $6, postal_code= $7, pet_friendly= $8, rent_amount= $9, available_date= $10, water= $11, eletricity= $12, internet= $13, heat= $14, natural_gas= $15, storage= $16, laundry_on_site= $17, furniture= $18, parking= $19, lat= $20, lng= $21, file= $22 where id=$23;", query, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("Updated");
      response.json(result.rows);
    });
  });
});

app.post('/api/rooms/:id/delete', (request, response) => {
  const room_id = request.params.id;
  const query = [room_id];
  client.query("DELETE FROM rooms where id=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    response.json(result.rows);
  });
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
  const name = request.query.name;
  const query = [name];

  client.query("select id from users where name=$1", query, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    response.json(result.rows);
  });

});
