const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/client/views"));
app.use(express.static(path.join(__dirname, "/public/dist/public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose');

// longform to require routes
// const routesFn = require('./server/config/routes');
// routesFn(app);

// shorthand to require routes
require('./server/config/routes')(app);


app.listen(7077, () => console.log("listening on port 7077"));