function createTodo(req, res) {
    let Commande = require('../models/commande');
    let newCommande = Commande ({
        commandNumber: req.body.number,
        description : req.body.description
    });
  
    newTodo.save()
    .then((savedTodo) => {

        //send back the created Todo
        res.json(savedTodo);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

module.exports.create = createTodo;