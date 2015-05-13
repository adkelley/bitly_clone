// index.js
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var RString = require("randomstring");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

//var urls = [];
var urls = {};

var viewsDir = path.join(process.cwd(), 'views');

app.get("/", function(req, res) {
  var homePath = path.join(viewsDir, "/home.html");
  res.sendFile(homePath);
});

app.get("/urls/:index", function(req, res) {
  var index = req.params.index;
  //console.log(index);
  res.redirect(urls[index]);
});

app.post("/urls", function(req, res) {
  var url = req.body.url;
  var key = RString.generate();
  urls[key] = url;
  //console.log(url);
  //urls.push(url);
  //console.log(urls);
//  res.send("View your URL at: my test at localhost:3000/urls/" + (urls.length-1).toString());
  res.send("View your URL at: my test at localhost:3000/urls/" + key);
});

app.listen(3000, function(req, res) {
  console.log("Connected to port 3000");
});
