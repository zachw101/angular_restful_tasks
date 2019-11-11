const usersController = require('../controllers/tasks');


module.exports = function (app) {
    // all routes go here

    app.get('/tasks', usersController.show);
    app.get('/tasks/:id', usersController.idShow);
    app.post('/tasks', usersController.create);
    app.put('/tasks/:id', usersController.update);
    app.delete('/tasks/delete/:id', usersController.destroy);
    
}