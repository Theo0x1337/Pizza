var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    clientNumber: Number,
    clientName: String,
    clientAddress: String,
    done: {
        type: Boolean,
        default: false
    },
   
});

module.exports = mongoose.model('Client', ClientSchema);
