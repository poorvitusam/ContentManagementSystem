var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angularnodecms');

var app = express();

// Body Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//Set routes
var pages = require('./routes/page.js');
var users = require('./routes/user.js');

app.use('/pages', pages);
app.use('/users', users);
app.use('/',pages);


var port = 3000;

app.listen(port, function(){
    console.log('Server started on port '+port);
});

module.exports = app;