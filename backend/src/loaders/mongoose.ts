const mongoose = require("mongoose");
const Config = require("../configs/configs");

function mongoModule() {
  mongoose
    .connect(Config.CONNECTING_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((response) =>
      console.info("Atlas mongo connect. Host:", response.connection.host)
    )
    .catch((err) => {
      console.error("Error to connect Database. ", err);
      process.exit(1);
    });
}

module.exports = mongoModule;
