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


// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");
// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.reddit.com/r/webdev", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);
  // An empty array to save the data that we'll scrape
  var results = [];
  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("p.title").each(function(i, element) {
    // Save the text of the element in a "title" variable
    var title = $(element).text();
    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var link = $(element).children().attr("href");
    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link
    });
  });
  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
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

