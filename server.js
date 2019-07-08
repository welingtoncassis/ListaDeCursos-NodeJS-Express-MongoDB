var app = require('./config/express')();
require('./config/database')('mongodb+srv://welingtoncassis:102610Mongodb*@cluster0-ufo2m.mongodb.net/treinaweb?retryWrites=true&w=majority')

app.listen(app.get('port'), function(){
    console.log(`Express Server on port ${app.get('port')}`);
})