// Local deps
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home Page 
        app.get('/', controllers.Home.index);
        
        // About Page
        app.get('/about', controllers.About.index); 

        // Users
        app.get('/users', controllers.Users.index);

    }

};

module.exports = Router;