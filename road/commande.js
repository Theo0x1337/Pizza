//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/commande", (req, res) => {
       res.json({"msg": "Vous avez envoyé les informations nécessaires pour une commande"});
});

//READ
router.get("/commande", (req, res) => {
    res.json({"msg": "Veuillez selectionnez vos produits et remplir l'adresse de livraison"});
});

//UPDATE
router.put("/commande", (req, res) => {
    res.json({"msg": "Vous avez modifié votre commande"});
});

//DELETE
router.delete("/commande", (req, res) => {
    res.json({"msg": "Vous avez annulé votre commande"});
});

module.exports = router;