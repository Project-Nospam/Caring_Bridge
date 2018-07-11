/* the only line you likely need to change is
 mongoURI = 'mongodb://localhost:27017/prime_app';
 change `prime_app` to the name of your database, and you should be all set!
*/

const mongoose = require('mongoose');


/* Mongo Connection */
let mongoURI = {};


// process.env.MONGODB_URI will only be defined if you are running on Heroku
if (process.env.MONGODB_URI) {

  let params = process.env.MONGODB_URI;
  let auth = params.auth.split(':');

  mongoURI = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true, // heroku requires ssl to be true
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

  // Heroku will provide this when deployed
  // use the string value of the environment variable
  // mongoURI = process.env.MONGODB_URI;
} else {
  // use database provided in the .env file
  mongoURI = {
    host:'mongodb://localhost',
    port: 27017,
    database: 'cb_data',
    max: 10,
    idleTimeoutMillis: 30000,

  }
}
console.log('heroku', mongoURI);

const pool = new mongoose.Pool(mongoURI);

pool.connect(mongoURI);

pool.connection.once('open', () => {
  console.log('Mongo connected');
});

pool.connection.on('error', (err) => {
  console.log('Error on mongoose connection: ', err);
});
