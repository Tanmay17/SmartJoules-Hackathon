const express = require('express')
const socket = require('socket.io')
const app = express()
let port = process.env.PORT || 3000
mongoose = require('mongoose'),
Task = require('./models/models'), //created model loading here
bodyParser = require('body-parser');

//Storing DATA
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tanmays321:tanmay123@ds111422.mlab.com:11422/sjpl'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.listen(port, () => {
    console.log('Server Running')
})