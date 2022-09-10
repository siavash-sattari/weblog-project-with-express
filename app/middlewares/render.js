const fs = require('fs');
const path = require('path');

module.exports = app => {
  app.use((req, res, next) => {
    const errors = req.flash('errors');
    const success = req.flash('success');
    const hasError = errors.length > 0;

    let currentUser = null;
    if ('user' in req.session) {
      currentUser = req.session.user;
    }

    let showFallbackImage = false;
    const filenames = fs.readdirSync(path.join(__dirname, '../../public/upload/avatars'));
    if (currentUser && !filenames.includes(currentUser.user_avatar)) {
      showFallbackImage = true;
    }

    const isAuthor = 'user' in req.session && req.session.user.role == 1 ? true : false;

    res.newRender = (template, options) => {
      options = { ...options, hasError, errors, success };
      res.render(template, options);
    };

    res.adminRender = (template, options) => {
      options = { ...options, layout: 'admin', hasError, errors, success, currentUser, showFallbackImage, isAuthor };
      res.render(template, options);
    };

    res.frontRender = (template, options) => {
      options = { layout: 'front', bodyClass: 'bg-gray', ...options };
      res.render(template, options);
    };

    next();
  });
};
