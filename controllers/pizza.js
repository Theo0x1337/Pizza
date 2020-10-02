function readPizza(req, res) {

    let Product = require("../models/modelsPizza");

    Product.findById({_name : req.params.name})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 function readPizzas(req, res) {

    let Product = require("../models/modelsPizza");

    Product.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 module.exports.reads = readPizzas;
 module.exports.read = readPizza;