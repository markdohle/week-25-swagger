//----Require the packages------
const express = require("express");
const app = express();
const swaggeJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

//----Default Route to the root-----

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//----Express Listener---------------
const port = 3000

app.listen(port, function() {
    console.log('listening on port ' + port)
});