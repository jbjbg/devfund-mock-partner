'use strict';

const express = require('express');
const app = express();
const uuid = require('uuid');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  let id = uuid();
  res.json(id);
});

app.get('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Not found';
});

app.use( (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
});
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on port ${port}`));
  },
};
