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
```

4. run the app

```npm start```














