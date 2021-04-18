let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
var port = 3000;

app.get('/', (req, res) => res.send('Placeholder Get Response'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});