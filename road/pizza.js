//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/pizza", (req, res) => {
       res.json({"msg": "Create a Pizza"});
});

//UPDATE
router.put("/pizza", (req, res) => {
    res.json({"msg": "Update a Pizza"});
});

//DELETE
router.delete("/pizza", (req, res) => {
    res.json({"msg": "Delete a Pizza"});
});


//get with name
router.get("/pizza/:name", (req, res) => {
    
    controller.read(req, res);

});

router.get("/pizzas", (req, res) => {
    
    controller.reads(req, res);

});


module.exports = router;