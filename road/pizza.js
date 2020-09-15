//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/pizza", (req, res) => {
       res.json({"msg": "Create a Pizza"});
});

//READ
router.get("/pizzas", (req, res) => {
    res.json({"msg": "Read all the Pizza"});
});

router.get("/pizza", (req, res) => {
    res.json({"msg": "Read a Pizza"});
});

//UPDATE
router.put("/pizza", (req, res) => {
    res.json({"msg": "Update a Pizza"});
});

//DELETE
router.delete("/pizza", (req, res) => {
    res.json({"msg": "Delete a Pizza"});
});

module.exports = router;