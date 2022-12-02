//----Require the packages------
const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

//--------------body-parser package used to parse POST data----------
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//----Default Route to the books with funny swagger code-----
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

//-----------------funny swagger code for POSTing with a single parameter named 'title' with data located in the body----------------
/**
* @swagger
* /book:
*   post:
*     description: Get one book
*     parameters:
*     - name: title
*       description: Book title
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*
*/

//-------------Express configuration for POST route-------------
app.post('/book', function (req, res) {
  const title = req.body.title;
 
  res.send({ title })
});

//----Express Listener---------------
const port = 3000

app.listen(port, function() {
    console.log('listening on port ' + port)
});