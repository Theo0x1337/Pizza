var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productNumber: Number,
  Allergen : String,
  Description : String,
  done : {
    type : Boolean,
    default : false
  },
});

module.exports = mongoose.model('Product', ProductSchema);
