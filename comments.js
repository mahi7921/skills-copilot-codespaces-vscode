//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
var Post = require('./models/post');
var User = require('./models/user');
var jwt = require('jsonwebtoken');
var config = require('./config');
var cors = require('cors');
var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//create router
var router = express.Router();
//middleware
router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});
//test route
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
//route to authenticate a user (POST http://localhost:8080/api/authenticate)
