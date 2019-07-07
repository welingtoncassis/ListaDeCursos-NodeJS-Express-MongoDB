var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            require: true,
            index: {
                unique: true //nome é único
            }
        },
        categoria: {
            type: String,
            require: true
        }
    });

    return mongoose.model('Curso', schema, 'cursos');

}