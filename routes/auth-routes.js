const router = require('express').Router();
const passport = require('passport');

// Auth Login
router.get('/login', (req, res) => res.render('login'));

// Auth Logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out')
});

// Google Auth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Callback/Redirect Route For Google To Redirect To
router.get('/google/redirect', passport.authenticate('google'), (req, res) => res.send('you reached the callback URI'))

module.exports = router;
