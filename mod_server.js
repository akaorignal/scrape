var express = require("express");
var mongoose = require("mongoose");
//var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
var request = require("request");
var cheerio = require("cheerio");
var mongo = require('mongodb');
var axios = require("axios");

var PORT = process.env.PORT || 3000;
var app = express();
//var routes = require("./routes");
app.use(express.static("public"));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //CH uncommented this
// app.use(routes);

////////////////////////////////////////////////
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

var collections =["scrapedata"];




app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

//will get overriden since using the "Public" static
app.get("/", function(req, res) {
    res.send("Hola Mundo");
});

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/scrape";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;

//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   db.collection("scrapeD").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });

//   mongoose.connect("mongodb://localhost/scrape", {
//       useMongoClient: true
//   });

 // app.get("/all", function(req, res){
 //     db.scrapedata.find({},function(err, found){
   //     if (err){
  //          console.log(err);
   //     }
   //     else {
  //          res.json(found);         }       });

// });

