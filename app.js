var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var util = require('util')

mongoose.connect('mongodb://127.0.0.1:27017/apponte');

// console.log(mongoose.connection)

app.use(express.static(__dirname + '/public'));	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(require('./routes'));

app.listen(8081);