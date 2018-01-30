const express = require('express');
const pg = require('pg');
const app = express();
const settings = require("./settings"); // settings.json
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

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

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * from users", (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows);
//     client.end();
//   });
// });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//login authentication
app.post('/api/login', (request, response) => {

});

//user registration
app.post('/api/register', (request, response) => {

});

//search for rooms
app.post('/api/rooms/search', (request, response) => {

});

//load users profile
app.get('/api/users/:id', (request, response) => {

});

//edit users profile
app.post('/api/users/:id', (request, response) => {

});

//load rooms for a specific user
app.get('/api/users/:id/rooms', (request, response) => {

});

//load messages for a specific user
app.get('/api/users/:id/messages', (request, response) => {

});

//post message from a specific user
app.post('/api/users/:id/messages', (request, response) => {

});

//load rooms profile
app.get('/api/rooms/:id', (request, response) => {

});

//edit rooms profile
app.post('/api/rooms/:id', (request, response) => {

});

//load aplications for a specific user
app.get('/api/users/:id/applications', (request, response) => {

});

//post aplication from a specific user
app.post('/api/users/:id/applications', (request, response) => {

});



app.get('/api/users', (request, response) => {
  // const users = [
  //   {id: 1, name: 'Arthur'},
  //   {id: 2, name: 'Brendan'},
  //   {id: 3, name: 'Konrad'}
  // ];

  let users = [];

  client.query("SELECT * from users", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(results);
    users = result.rows;
    console.log(users);
    client.end();
  });

  response.json(users);
});



