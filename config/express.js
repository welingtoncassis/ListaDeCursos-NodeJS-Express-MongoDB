var express = require('express');
var bodyParser = require('body-parser');

var homeController = require('../app/controllers/home')();


module.exports = function(){
    var app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());

    app.get('/',homeController.index)
    
    return app;
}