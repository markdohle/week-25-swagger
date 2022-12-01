# week-25-swagger
MIT xPro - Week 25 - API Documentation with Swagger

1. Install Packages

```npm init```

Start by installing these npm packages:

[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

```npm i swagger-jsdoc```

[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

```npm i swagger-ui-express```

[express](https://www.npmjs.com/package/express)

```npm i express```

[Nodemon](https://www.npmjs.com/package/nodemon)

```npm i nodemon```

Then create your own “Hello World!” application to test that your code is executing.

2. Add a start "script" to the package.json in order to take advantage of nodemon.

```"start": "nodemon index.js"```

3. index.js

```
//----Require the packages------
const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
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
```

4. run the app

```npm start```

5. Here you’ll configure swagger-jsdoc and swagger-ui. You’ll work through a library application example and automatically generate an API for a GET route, with accompanying documentation using these tools.

- swaggerOptions

```
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
```

```
//----Default Route to the books useing swagger to document the API and funny looking YML syntax-----
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
```

GOTO port ```3000/api-docs``` and click get books and click execute to see the book.














