// Home Controller

var Home = {
    
    index: function(req, res){
        res.render('index', { tittle: 'Express' });
    }

};

module.exports = Home;