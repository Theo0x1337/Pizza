function createOrder(req, res) {
    let Order = require('../models/commande');
    let newOrder = Commande ({
        OrderNumber: req.body.number,
        description : req.body.description,
        itemNumber : req.body.itemNumber,
        address : req.body.address,
        paymentMethod: req.body.paymentMethod
    });
  
    newOrder.save()
    .then((savedOrder) => {

        //send back the created Order
        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

module.exports.create = createOrder;