var mongoose = require('mongoose');

module.exports = function(url){
    mongoose.connect(url, {useNewUrlParser:true});

    mongoose.connection.on('connected', function(){
        console.log('Mongoose conectado em ' + url);
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose desconectado');
    });

    mongoose.connection.on('error', function(){
        console.log('Mongoose erro de conexão');
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose encerrado!');
            process.exit(0)
        })
    })
}