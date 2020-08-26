// Require modules
const express = require('express');
const path = require('path');
// require the skills "database"
const skillsDB = require('./data/skills');
 	
// Create the Express app
const app = express();
    
// Configure the app (app.set) aka specify the ejs/express view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//tell Express where all of our views can be found
    
// Mount middleware (app.use)
    
    
// Mount / Define routes
app.get('/', function(req, res) {
    res.redirect('/home');
  });

app.get('/home', function(req, res) {
    //res.send('<h1>Welcome Home</h1>');
    res.render('home');
});

app.get('/skills', function(req, res) {
    res.render('skills/index', {
      skills: skillsDB.getAll()
    });
  });

    
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});