var app = require('./config/express')();
require('./config/database')('mongodb+srv://welingtoncassis:SENHA@cluster0-ufo2m.mongodb.net/BANCO?retryWrites=true&w=majority')

app.listen(app.get('port'), function(){
    console.log(`Express Server on port ${app.get('port')}`);
})
