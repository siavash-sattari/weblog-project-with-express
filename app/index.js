const express = require('express');
const app = express();

require('./boot')(app);
require('./routes')(app);

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
