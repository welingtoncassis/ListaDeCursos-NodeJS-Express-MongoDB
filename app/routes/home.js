module.exports = function(app){
    var controller = app.controllers.homeCtrl;

    app.get('/', controller.index);
    app.post('/', controller.newItem);
}