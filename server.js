'use strict';

const express = require('express');
const app = express();
const uuid = require('uuid');


app.use(express.json());

app.get('/', (err, req, res) => {
  if(err) {
    // res.error(503);
    throw err;
  }
  let id = uuid();
  res.json(id);
});


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on port ${port}`));
  },
};
