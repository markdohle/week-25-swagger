# week-25-swagger
MIT xPro - Week 25 - API Documentation with Swagger

What is API Documentation?

API documentation contains clear and concise instructions on how to use and integrate an API. 

API Documentation Best Practices

1. Write Documentation for Nontechnical People

All users will have different levels of experience and knowledge, so it is important that you write documentation in simple, clear language.

Review the documentation for [Twilio’s APIs](https://www.twilio.com/docs/usage/api), for instance. The writers describe and define what an API is and how it works at the very beginning of the guide. They don’t assume that everyone reading this documentation is an expert.

2. Include Explicit Request and Response Cycles

Those using your API need to know what your endpoint expects within the request body and what it could return as a response. For example, if your endpoint runs into an error, what response status and message will be returned? Detailing that in the documentation will help users understand what to expect and what’s needed.

3. Keep It as Simple as Possible

A user trying to read through three paragraphs of text on one single endpoint will feel frustrated. Where possible, keep your documentation simple and short, without sacrificing readability.

4. Keep It Up-to-Date

It is important to maintain your documentation. Out-of-date API documentation can lead a developer in the wrong direction and waste their time.

### Step 1

- Start by installing these npm packages:

```npm init```

[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

```npm i swagger-jsdoc```

[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

```npm i swagger-ui-express```

[express](https://www.npmjs.com/package/express)

```npm i express```

[Nodemon](https://www.npmjs.com/package/nodemon)

```npm i nodemon```

- Add a start "script" to the package.json in order to take advantage of nodemon.

```"start": "nodemon index.js"```

- index.js

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

- run the app

```npm start```

### Step 2

Here you’ll configure swagger-jsdoc and swagger-ui. You’ll work through a library application example and automatically generate an API for a GET route, with accompanying documentation using these tools.

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

- GOTO port ```3000/api-docs``` and click get books and click execute to see the book.














