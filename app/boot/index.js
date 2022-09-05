const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const sessionStore = require('./session-handlers/mysql')(session);

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
  app.use(cookieParser());
  app.use(
    session({
      store: sessionStore,
      secret: 'sdf6c87sd6fvc9dws8vcf9ds6v96dwsv',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 60000 }
    })
  );
  app.use(flash());
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '../views'));
  app.use('/static', express.static(path.join(__dirname, '../../public')));
};
