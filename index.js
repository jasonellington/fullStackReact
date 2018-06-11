const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');

// connec to our mongoose instance
mongoose.connect(keys.mongoURI);

// app declaration
const app = express();
// tell express to use cookies for the app
// pass a config option
// maxAge is 30 days
// key is used to encrypt cookie
// cookieSession can take multiple keys in the key array and pick them randomly
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
