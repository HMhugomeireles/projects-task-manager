const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

function expressModules({ app }) {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
}

module.exports = expressModules;
