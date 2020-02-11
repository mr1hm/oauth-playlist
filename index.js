const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

// Set Up View Engine
app.set('view engine', 'ejs');

// Set Up Routes
app.use('/auth', authRoutes);

// Create HomePage Route
app.get('/', (req, res) => res.render('home'));

app.listen(3001, () => console.log('Listening on port 3001'));
