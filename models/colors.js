var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = new Schema({
    colorUserName : String,
    favoriteColor: String
}, {strict: true});

module.exports = mongoose.model('colors', ColorSchema );
