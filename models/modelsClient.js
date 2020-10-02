var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    clientName: String,
    clientAddress: String,
});

module.exports = mongoose.model('Client', ClientSchema);
