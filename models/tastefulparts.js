var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TastefulSchema = new Schema({
    tastefulUserName : String,
    newPart: String,
    timeStamp: String
}, {strict: true});

module.exports = mongoose.model('tastefulparts', TastefulSchema );
