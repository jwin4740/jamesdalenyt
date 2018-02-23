const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require("./config/keys");
const path = require("path");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose & connect to db
mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, () => console.log(`Server Listening on ${PORT}!`));
