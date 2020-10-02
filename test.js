const Client = require("./models/modelsClient");
const mongoose = require('mongoose');
const chalk = require('chalk');


//Connecting to MongoDB (async/await approach)
mongoose.connect('mongodb://localhost:27017/pizza', {useNewUrlParser: true, useUnifiedTopology : true})
.then(
    () => {
        console.log(chalk.green(`Connected to database`))
    },
    error => {
        console.error(chalk.red(`Connection error: ${error.stack}`))
        process.exit(1)
    }
).then(() => {
    const product = new Client({
        clientName:"Kevin Fanton",
        clientAddress:"9 boulevard de la rocade",
    })
    
    return product.save().then(() => product)
}).then(product => {
    console.log(product._id);
}).then(() => mongoose.connection.close())
.catch(console.error)
