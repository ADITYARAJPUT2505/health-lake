const express = require("express");
const { PORT } = require("./config/server_coonfig");
const setupServer = async () => {
  const app = express();

  app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT} `);
  });
};

setupServer();
