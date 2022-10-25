var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Frontend Developer
app.get("/frontend", function(req, res) {
    res.render("pages/frontend");
});

// Backend Developer


// .NET Developer
app.get("/netdev", function(req, res) {
  res.render("pages/netdev");
});

// QA Engineer


// Python Developer


// AWS DevOps Engineer
app.get("/awsdevops", function(req, res) {
  res.render("pages/AWSDevOps")
})

// Data Analyst


// Data Scientist


// Data Architect


// Data Scientist


// Director of IT


// Vice President of Development


// IT Manager

app.listen(8080);
console.log('Server is listening on port 8080');