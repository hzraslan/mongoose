var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    info: { type: String, required: true, minlength: 2},
    picture: { type: String}
}, {timestamps: true });
   mongoose.model('Animal', AnimalSchema);