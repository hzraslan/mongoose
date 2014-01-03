var animals = require('../controllers/animals.js');
module.exports = function(app){
app.get('/', function(req, res) {
    animals.index(req, res);
})
app.get('/mongooses/new', function(req, res){
    animals.mangooses_new(req, res);
})
app.post('/mongooses', function(req, res) {
    animals.mangooses_create(req, res);
})
app.get('/mongooses/edit/:id', function(req,res){
    animals.mangooses_edit(req, res);
})
 app.post('/mongooses/:id', function(req,res){
    animals.mangooses_update(req, res);
})
app.get('/mongooses/:id', function(req,res){
    animals.mangooses_show(req, res);
})
app.post('/mongooses/destroy/:id', function(req,res){
    animals.mangooses_destroy(req, res);
})
}