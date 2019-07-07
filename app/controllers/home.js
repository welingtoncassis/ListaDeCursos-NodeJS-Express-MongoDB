var cursos = [
    {nome: 'JavaScript', categoria: 'front-end'},
    {nome: 'Html', categoria: 'front-end'},
    {nome: 'PHP', categoria: 'back-end'},
    {nome: 'Java', categoria: 'back-end'},
    {nome: 'Python', categoria: 'back-end'}
]

module.exports = function(app){

    var controller = {
        index: function(req, res){
            res.render('index', {cursos})
        },
        newItem: function(req, res){
            cursos.push(req.body);
            res.json(cursos);
        }
    }

    return controller;
}