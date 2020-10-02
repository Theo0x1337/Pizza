var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  name: String,
  products : [subSchema],
});

module.exports = mongoose.model('Pizza', PizzaSchema);
