
module.exports = function(app){
    var Curso = app.models.cursoModel;

    var controller = {
        index: function(req, res){
            Curso.find({},[], {sort: {nome:1}}).exec().then((cursos)=>{
                res.render('index', {cursos});
            })
        },
        newItem: function(req, res){
            var curso = new Curso(req.body);//json enviado na requisição
            curso.save(function(err, curso){
                if(err){
                    res.status(500).end();
                    console.error(err);
                }else{
                    res.json(curso);
                }
            })
        }
    }

    return controller;
}