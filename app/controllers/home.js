module.exports = function(app){
    var controller = {
        index: function(req, res){
            res.json({'message':'lista de alunos'});
        }
    }

    return controller;
}