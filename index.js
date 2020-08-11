var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var config = require('./config');
const port = 5000;
var checkInRouter = require('./routes/checkin');
var checkOutRouter = require('./routes/checkout');

var db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to the database");
// });

// global.db = db;

app.set('port',port);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use('/checkin',checkInRouter);
app.use('/checkout',checkOutRouter);
app.listen(port,()=>{
  console.log("Server is up and running at port",port);
})
