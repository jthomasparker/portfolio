var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var PORT = process.env.PORT || 3000

app.use(express.static('public/_current'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
var routes = require('./routes.js')(app)


app.listen(PORT, function(){
    console.log("Server listening on port", PORT)
})