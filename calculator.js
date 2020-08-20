//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){

  var n1 = Number(req.body.num1);
  n1 += Number(req.body.num2);

  res.send("Sum = " + n1);
});

app.post("/bmicalculator", function(req, res){

  var n1 = parseFloat(req.body.weight);
  var n2 = parseFloat(req.body.height);
  var bmi = n1 / (n2 * n2);
  res.send("Your BMI = " + bmi);
});


app.listen(3000, function(){
  console.log("Server Started!!! at port 3000");
});
