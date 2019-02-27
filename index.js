'use strict';
require('dotenv').config();
require('./server.js').start(process.env.port||3000);