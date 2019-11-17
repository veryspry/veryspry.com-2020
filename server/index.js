// Read .env file
require("dotenv").config();
// Packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
// variables
const port = 8080;

// Set up middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(`${__dirname}/../ui/dist`));
app.use(routes);

// Default Routes
app.get("*", (req, res) => {
  console.log("__dirname", __dirname);
  res.sendFile(path.join(__dirname, "../", "ui/dist/index.html"));
});

// Listen
app.listen(port, () => console.log(`Server is listening on port ${port}`));
