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
  start: () => {
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};
