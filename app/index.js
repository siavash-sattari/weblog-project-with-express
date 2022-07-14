const express = require('express');
const app = express();
require('./boot')(app);

app.get('/', (req, res) => {
  res.render('main', { layout: false, userID: 123 });
});

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
