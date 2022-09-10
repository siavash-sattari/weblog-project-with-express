const commentModel = require('@models/comment');
const dateService = require('@services/dateService');
const { gravatar } = require('@services/userService');
const commentStatus = require('@models/comment/commentStatus');

exports.index = async (req, res) => {
  let comments;
  const author = 'user' in req.session && req.session.user.role == 1 ? req.session.user : null;
  if (author) {
    comments = await commentModel.findAuthorComments(author.id);
  } else {
    comments = await commentModel.findAll();
  }

  const presentedComments = comments.map(comment => {
    comment.userAvatar = gravatar(comment.user_email);
    comment.created_at = dateService.toPersianDate(comment.created_at);
    return comment;
  });
  res.adminRender('admin/comments/index', {
    layout: 'admin',
    comments: presentedComments,
    helpers: {
      commentBackground: function (status, options) {
        let cssClass = 'alert ';
        switch (true) {
          case status === commentStatus.APPROVED:
            cssClass += 'alert-success';
            break;
          case status === commentStatus.REJECTED:
            cssClass += 'alert-danger';
            break;
          case status === commentStatus.REVIEW:
            cssClass += 'alert-dark';
            break;
        }
        return cssClass;
      }
    }
  });
};

exports.approve = async (req, res) => {
  const commentID = req.params.commentID;
  const result = await commentModel.approve(commentID);
  return res.redirect('/admin/comments');
};

exports.reject = async (req, res) => {
  const commentID = req.params.commentID;
  const result = await commentModel.reject(commentID);
  return res.redirect('/admin/comments');
};

exports.delete = async (req, res) => {
  const commentID = req.params.commentID;
  const result = await commentModel.delete(commentID);
  return res.redirect('/admin/comments');
};
