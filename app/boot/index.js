const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
  helpers: {
    inc: function (value) {
      return parseInt(value) + 1;
    }
  }
});

const path = require('path');

module.exports = app => {
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '../views'));
  app.use('/static', express.static(path.join(__dirname, '../../public')));
};
