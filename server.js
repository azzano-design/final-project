const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/users', (request, response) => {
  const users = [
    {id: 1, name: 'Arthur'},
    {id: 2, name: 'Brendan'},
    {id: 3, name: 'Konrad'}
  ];

  response.json(users);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
