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

// 1
// .NET Developer
app.get("/netdev", function(req, res) {
  res.render("pages/netdev");
});

// 2
// AWS DevOps Engineer
app.get("/awsdevops", function(req, res) {
  res.render("pages/AWSDevOps");
});

// 3
// Backend Developer
app.get("/backend", function(req, res) {
  res.render("pages/backendDev");
});

// 4
// Data Analyst
app.get("/dataAnalyst", function(req, res) {
  res.render("pages/dataAnalyst");
});

// 5
// Data Architect
// No MPC yet
app.get("/dataArchitect", function(req, res) {
  res.render("pages/dataArchitect");
});

// 6
// Data Engineer
app.get("/dataEngineer", function(req, res) {
  res.render("pages/dataEngineer");
});

// 7
// Data Scientist
app.get("/dataScientist", function(req, res) {
  res.render("pages/dataScientist");
});

// 8
// Director of IT
app.get("/directorOfIT", function(req, res) {
  res.render("pages/directorOfIT");
});

// 9
// Frontend Developer
app.get("/frontend", function(req, res) {
    res.render("pages/frontend");
});

// 10
// IT Manager
app.get("/ITManager", function(req, res) {
  res.render("pages/ITManagerTwo");
});

// 11
// Python Developer
app.get("/pythonDev", function(req, res) {
  res.render("pages/pythonDev");
});

// 12
// QA Engineer
app.get("/QAEngineer", function(req, res) {
  res.render("pages/QAEngineer");
});

// 13
// Vice President of Development
app.get("/vpofdev", function(req, res) {
  res.render("pages/VPofDev");
});

// 14
// WordPress Developer
app.get("/wordpressDev", function(req, res) {
  res.render("pages/wordpressDev");
});

// 15
// Xamarin Developer
app.get("/xamarinDev", function(req, res) {
  res.render("pages/xamarinDev");
});

// 16
// Cybersecurity Technician
app.get("/cybersecurity", function(req, res) {
  res.render("pages/cybersecurity");
});

// 17
// Senior Java Developer
app.get("/seniorJavaDev", function(req, res) {
  res.render("pages/seniorJavaDev");
});

const PORT = process.env.PORT || 5001;

// Message
app.listen(PORT, ()=> console.log("Server is listening on port $(PORT)"));