const postModel = require('@models/post');
const userModel = require('@models/user');
const commentModel = require('@models/comment');
const userService = require('@services/userService');
const dateService = require('@services/dateService');
const _ = require('lodash');

exports.showPost = async (req, res) => {
  const postSlug = req.params.post_slug;
  const post = await postModel.findBySlug(postSlug);

  if (!post) {
    return res.redirect('/404');
  }

  const user = await userModel.find(post.author_id);
  user.avatar = userService.gravatar(user.email);
  post.author = user;

  post.created_at = dateService.toPersianDate(post.created_at);

  const comments = await commentModel.findByPostId(post.id);

  const presentedComments = comments.map(comment => {
    comment.avatar = userService.gravatar(comment.user_email);
    comment.created_at = dateService.toPersianDate(comment.created_at);
    return comment;
  });

  const newComments = _.groupBy(presentedComments, 'parent');

  res.frontRender('front/post/single', {
    post,
    comments: newComments[0],
    bodyClass: 'single-post',
    helpers: {
      hasChildren: function (commentID, options) {
        return commentID in newComments;
      },
      getChildren: function (commentID, options) {
        return newComments[commentID];
      }
    }
  });
};
