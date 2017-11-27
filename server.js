// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/scrape";//db name scrape
//var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("./models");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("scrapeD").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
});

mongoose.connect("mongodb://localhost/scrape", {
    useMongoClient: true
  });

var app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


//var db = require("./models");
app.use(express.static("public"));


//collection = table

// A GET route for scraping
app.get("/", function(req, res) {
    res.send("Hola");});
app.listen(3000, function(){
    console.log("listening");
});


// A GET route for scraping the echojs website

});

