var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  client : {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Client',
  },
  order: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza'}],
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
