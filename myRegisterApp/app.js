var express = require('express');
var app = express();
var port = 9001;
var dbConnection = require('./dbConnection');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//API Call Triggering:START
app.post("/registration", (req, res) => {
  console.log('req value is'+req.body);
  var myData = new dbConnection.user(req.body);
  console.log("my data"+myData);
  myData.save()
    .then(item => { 
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
//API call triggering:END
  app.listen(port, () => {
    console.log("Server listening on port " + port);
  });