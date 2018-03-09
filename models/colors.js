var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkerSchema = new Schema({
    userName : String,
    favoriteColor: String
}, {strict: true});

module.exports = mongoose.model('marker', MarkerSchema );
