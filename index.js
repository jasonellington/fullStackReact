const express = require('express');
const passport = require('passport');
//add the google passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// how we identify our application to google servers
//client-id 680953567235-t5f48v2u4p2dgu71ef9jmfj06gefgfgi.apps.googleusercontent.com
//no one can have this secret!!!
//client-secret ACMj3lcnSQOMgg44vuW_kyuX
/*
* callbackURL is what is used after the user grants permission
* we then tell the app "it is okay to use google" the app then
* uses the callback function is say "yes I am allowed to use google"
* and then it retrieves the avaiable data
*/
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken:", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
    }
  )
);

//start the entire oauth process ^
//the 'google' string is known by passport as the GoogleStrategy
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
