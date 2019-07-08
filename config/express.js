var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');



module.exports = function(){
    var app = express();

    app.set('port', process.env.PORT);//3000
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');//configurando path das templates
    app.set('views', './app/views');

    //ordem de carregamento: models, controll, rotas
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app); // apos isso app.controllers.home
    

    return app;
}