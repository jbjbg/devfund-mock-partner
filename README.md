# DevFund - back end

### Author: Becca Lee, Brent Woodward, George Raymond, Jacob Anderson, Jonathan DiQuattro

### Links and Resources
* [Front end repo](https://github.com/jbjbg/devfund-fe)
* [DevFund.io](https://www.devfund.io/)
* [Back end repo](https://github.com/jbjbg/devfund-be)
* [Mock partner repo](https://github.com/jbjbg/devfund-mock-partner)

## Project Info
The DevFund project is a proof-of-concept for a site that helps fund learning resources for new developers looking to break into the industry. It's an easy way for new devs to request the resources they need to learn to code, and for folks looking to give back to help fund them. DevFund was built to help grow the developer community and make giving back to it a little easier.

## Technology Used 
Express, uuid

### Modules
#### `index.js`
##### Exported Values and Methods

#### `server.js`
##### Exported Values and Methods

###### `get('/', (req res)) -> string`
Usage Notes or examples

###### `get('*', (req res)) -> array`
Usage Notes or examples

###### `use( (err, req, res, next)`

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `node index.js`
* Endpoint: `/`
  * Returns a JSON object with a uuid, meant to simulate a real access code.
