


function readProduct(req, res) {

    let Product = require("../models/modelsProduct");

    Product.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 function readProducts(req, res) {

    let Product = require("../models/modelsProduct");

    Product.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 module.exports.reads = readProducts;
 module.exports.read = readProduct;