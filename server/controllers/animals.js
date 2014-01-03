const mongoose = require('mongoose'),
      Animal = mongoose.model('Animal')
module.exports = {
    index: function(req, res){
        Animal.find({}, function(err, animals){
            if(err){
                console.log("everything went wrong")
            }else{
                res.render('index', {animals: animals});
            }
        })
    },
    mangooses_new: function(req, res){
        res.render('new')
    },
    mangooses_create: function(req, res){
        console.log("POST DATA", req.body);
        var animal = new Animal({name: req.body.name, info: req.body.info, picture: req.body.picture});
        animal.save(function(err) {
          if(err) {
            console.log('something went wrong');
          } else { 
            console.log('successfully added an animal!');
            res.redirect('/');
          }
        })
    }, 
    mangooses_edit: function(req, res){
        Animal.findById(req.params.id, function(err, animal){
            if(err){
                console.log("I am not able to find it");
            }else{
                res.render('edit', {"animal": animal});
            }
        })
    },
    mangooses_update: function(req, res){
        Animal.findById(req.params.id, function(err, animal){
            animal = Animal.update({name: req.body.name, info: req.body.info, picture: req.body.picture}, function(err){
            if(err){
                console.log("I am not able to update");
            }else{
                res.redirect('/');
            }
            });
        });
    },
    mangooses_show: function(req, res){
        Animal.findById(req.params.id, function(err, animal){
            if(err){
                console.log("I am not able to find it");
            }else{
                console.log(animal.picture)
                res.render('show', {"animal": animal});
            }
        })
    },
    mangooses_destroy: function(req, res){
        var id = req.params.id;
        Animal.remove({_id: id }, function(err){
          if(err){
              console.log(err);
          }
          else{
              console.log('succesfully removed');
              res.redirect('/');
          }
      })
    }
}