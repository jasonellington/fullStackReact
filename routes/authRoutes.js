//routes for google, facebook, login
const passport = require('passport');

module.exports = (app) => {
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

//logout is automatically a part of passport, it takes the cookie and removes it from user, so it kills the cookie
//and says that's it, you're not the user anymore
  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.send(req.user);
    }
  )

// req is the incoming request, res is the respose
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
