const Order = require("./models/modelsOrder");
const mongoose = require('mongoose');
const chalk = require('chalk');

(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/pizza', {useNewUrlParser: true, useUnifiedTopology : true})
    } catch (error) {
        console.error(chalk.red(`Connection error: ${error.stack}`))
        process.exit(1)
    }

    const product = new Order({
        client:"5f771d00e1fa8519d8496cd3",
        order: [
            {
                _id:"5f7717fc567bf917bb3df4f2",

            },
       ],
    })

    await product.save()
    console.log(product._id);
    await mongoose.connection.close()
})()