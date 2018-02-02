const express = require('express');
const pg = require('pg');
const app = express();
const settings = require("./settings"); // settings.json
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
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


//login registration
app.post('/api/login', (request, response) => {
  client.query("select * from users where email = 'alice@gmail.com'", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    } else if (result.rows >= 1) {
      console.log(result.rows);
      response.send('user has an account');
    } else {
      console.log(result.rows);
      client.query("INSERT INTO users(name, email) values('Alice', 'alice@gmail.com')", (err, result) => {
        if (err) {
          return console.error("error running query", err);
        }
      });
      response.send('new user registered');
    }
  });
});

app.get('/api/rooms' , (request, response) => {
  client.query("select * from rooms", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });
});

app.post('/api/rooms', (request, response) => {
  console.log('howdy', request);
  response.json("hello");
});

//search for rooms
app.get('/api/rooms/search', (request, response) => {

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

  // database('users').select().then((users) => {
    // response.status(200).json(users);
  // }).catch((error) => {
    // response.status(500).json({ error });
  // });

  client.query("select * from users", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows);
    response.json(result.rows);
  });

});



