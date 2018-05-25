//node js does not support ES2015 modules
//so this is what we use to "import" our packages
const express = require('express');
const app = express();

/*
* app is the single express application, we are performing a get request
* for whatever information is at '/', which happens to be our res (response)
* which for now is just the one line of json
*/
app.get('/', (req, res) => {
  res.send({ hello: 'express' });
});

//Dynamic Port Binding
//heroku passing us runtime configs, which port our app is running on the 5000 is local development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
