const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');

const html = require('./app/routing/htmlRoutes');
const api = require('./app/routing/apiRoutes');

let app = express();
const PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// simpler Handlebars helper that I use to increment index by 1.
// used in results.handlebars
Handlebars.registerHelper('inc', function(value, options) {
    return parseInt(value) + 1;
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use('/api', api);
app.use('/', html);


app.listen(PORT, () => console.log("App running: http://localhost:3000"));
