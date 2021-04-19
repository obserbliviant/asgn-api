let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const apiRouter = require('./asgn-router');

let app = express();
var port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/assignments", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully.");
}

app.use("/asgn-api", apiRouter);

app.get('/', (req, res) => res.send('Placeholder Get Response'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});