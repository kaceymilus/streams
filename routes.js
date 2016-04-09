// Local deps
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home Page 
        app.get('/', controllers.Home.index);

        // Users
        app.get('/users', controllers.Users.index);

    }

};

module.exports = Router;