//----Require the packages------
const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

//-----Swagger Options--------

const options = {
    definition: {
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['index.js'], // files containing annotations as above
  };
  
  const docs = swaggerJsDoc(options);

  //-----pass configuration into express app, -------
  app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(docs))


//----Default Route to the root-----

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//----Default Route to the books-----
/**
* @swagger
* /books:
*   get:
*     description: Get all books
*     responses:
*       200:
*         description: Success
*
*/
app.get('/books', function (req, res) {
    res.send([
        {
            isbn : '9781781100486',
            title: 'Harry Potter and the Sorcerer\'s Stone',
            author: 'J.K. Rowling',
            publisher: 'Scholastic'
        }
    ]);
});


//----Express Listener---------------
const port = 3000

app.listen(port, function() {
    console.log('listening on port ' + port)
});