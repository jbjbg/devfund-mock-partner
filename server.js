'use strict';

const express = require('express');
const app = express();
const uuid = require('uuid');


app.use(express.json());

app.get('/', (err, req, res, next) => {
  if(err) {
    // res.error(503);
    return next(err);
  }
  let id = uuid();
  res.json(id);
});


module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3030;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};