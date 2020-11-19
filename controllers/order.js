function createOrder(req, res) {
    let Order = require('../models/modelsOrder');
    let newOrder = Order ({
        client : req.body.client,
        order : req.body.order,
        deliveryAddress : req.body.deliveryAddress
    });
  
    newOrder.save()
    .then((savedOrder) => {

        //send back the created Order
        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}



function deleteOrder(req, res) {

    let Order = require("../models/modelsOrder");

    Order.findOneAndRemove({_id : req.params.id})
    .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
 }



 function readOrder(req, res) {

    let Order = require("../models/modelsOrder");

    Order.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }


 function readOrders(req, res) {

    let Order = require("../models/modelsOrder");

    Order.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createOrder;
module.exports.delete = deleteOrder;
module.exports.read = readOrder;
module.exports.reads = readOrders;