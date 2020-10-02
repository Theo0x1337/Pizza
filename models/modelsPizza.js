var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  name: String,
  products: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'}]
});

module.exports = mongoose.model('Pizza', PizzaSchema);
