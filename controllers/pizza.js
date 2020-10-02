function readPizza(req, res) {

    let Pizza = require("../models/modelsPizza");

    Pizza.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 function readPizzas(req, res) {

    let Pizza = require("../models/modelsPizza");

    Pizza.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 module.exports.reads = readPizzas;
 module.exports.read = readPizza;