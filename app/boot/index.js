const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  helpers: {
    inc: function (value) {
      return parseInt(value) + 1;
    }
  }
});

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '../views'));
  app.use('/static', express.static(path.join(__dirname, '../../public')));
};
