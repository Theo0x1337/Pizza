//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Use chalk to add colours on the console
const chalk = require('chalk');

//Create an application 
const app = express();

//Accessing the road for the user
const pizzaRoad = require('./road/pizza');

//Acces the routes 
app.use(pizzaRoad); 

//Listen on the port 3000
app.listen(3000);

//Print out where the server is
console.log(chalk.green("Server is running on port: 3000"));