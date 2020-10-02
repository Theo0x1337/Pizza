function createClient(req, res) {
    let Client = require('../models/modelsClient');
    let newClient = Client({
        clientNumber: req.body.number,
        clientName: req.body.clientName,
        ClientAddress: req.body.clientAddress,
    });

    newClient.save()
        .then((savedClient) => {

            //send back the created Client
            res.json(savedClient);

        }, (err) => {
            res.status(400).json(err)
        });

}



function deleteClient(req, res) {

    let Client = require("../models/modelsClient");

    Client.findOneAndRemove({ _id: req.params.id })
        .then((deletedClient) => {
            res.status(200).json(deletedClient);
        }, (err) => {
            res.status(500).json(err);
        });
}



function readClient(req, res) {

    let Client = require("../models/modelsClient");

    Client.findById({ _id: req.params.id })
        .then((client) => {
            res.status(200).json(client);
        }, (err) => {
            res.status(500).json(err);
        });
}


function readClients(req, res) {

    let Client = require("../models/modelsClient");

    Client.find({})
        .then((clients) => {
            res.status(200).json(clients);
        }, (err) => {
            res.status(500).json(err);
        });
}


module.exports.create = createClient;
module.exports.delete = deleteClient;
module.exports.read = readClient;
module.exports.reads = readClients;