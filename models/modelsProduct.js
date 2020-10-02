var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productNumber: Number,
  Description : String,
});

module.exports = mongoose.model('Product', ProductSchema);
