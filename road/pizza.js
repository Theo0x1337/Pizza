
//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza');


//READ
router.get("/pizzas", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/pizza/:id", (req, res) => {
    
    controller.read(req, res);

});

module.exports = router;

