
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

// start up the mongo database
require('./modules/database');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const siteRouter = require('./routes/site.router');
const profileRouter = require('./routes/profile.router');
const scanRouter = require('./routes/scan.router');

// Filter function
const runFilter = require('./modules/filter/filter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/site', siteRouter);
app.use('/api/profile', profileRouter);
app.use('/api/scan', scanRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

runFilter();

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
