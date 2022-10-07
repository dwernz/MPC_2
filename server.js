var express = require("express");
var app = express();

// set up the view engine to ejs
app.set("view engine", "ejs");

// user res.render to load up an ejs view file

// index page
app.get("/", function(req, res) {
    res.render('pages/index');
});

// Frontend Developer


// Backend Developer


// AWS DevOps Engineer


// .NET DEveloper


// Data Analyst


// Director of Information Technology


// Vice President of Development


// Information Technology Manager


// Data Architect


// QA Engineer


// Data Scientist


// Python Developer

app.listen(8080);
console.log("Server is listening on port 8080");