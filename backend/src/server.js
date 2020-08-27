require("dotenv").config();
const express = require("express");
const mongoModule = require("./loaders/mongoose");
const expressModule = require("./loaders/expressModules");
const api = require("./loaders/api");
const ErrorHandler = require("./loaders/errors");

mongoModule();

const app = express();
const SERVER_PORT = process.env.PORT || 4444;

expressModule({ app });
// Routes
api({ app });

app.use(ErrorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running in http://localhost:${SERVER_PORT}`);
});
