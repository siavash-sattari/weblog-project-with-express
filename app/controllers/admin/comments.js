const commentModel = require('@models/comment');
const dateService = require('@services/dateService');
const { gravatar } = require('@services/userService');

exports.index = async (req, res) => {
  const comments = await commentModel.findAll();
  const presentedComments = comments.map(comment => {
    comment.userAvatar = gravatar(comment.user_email);
    comment.created_at = dateService.toPersianDate(comment.created_at);
    return comment;
  });
  res.render('admin/comments/index', { layout: 'admin', comments: presentedComments });
};
