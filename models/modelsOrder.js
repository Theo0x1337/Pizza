var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  numberOrder: Number,
  clientName : String,
  order : String,
  deliveryAdresse : String,
  done : {
    type : Boolean,
    default : false
  },
  orderedAt : {
    type : Date,
    default : Date.now
  },
  createAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Order', OrderSchema);
