
//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/products');


//READ
router.get("/products", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/product/:id", (req, res) => {
    
    controller.read(req, res);

});

module.exports.router;