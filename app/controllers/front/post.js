const postModel = require('@models/post');
const userModel = require('@models/user');
const commentModel = require('@models/comment');
const userService = require('@services/userService');
const dateService = require('@services/dateService');

exports.showPost = async (req, res) => {
  const postSlug = req.params.post_slug;
  const post = await postModel.findBySlug(postSlug);

  if (!post) {
    return res.redirect('/404');
  }

  const user = await userModel.find(post.author_id);
  user.avatar = userService.gravatar(user.email);
  post.author = user;

  const comments = await commentModel.findByPostId(post.id);

  post.comments = comments.map(comment => {
    comment.avatar = userService.gravatar(comment.user_email);
    comment.created_at = dateService.toPersianDate(comment.created_at);
    return comment;
  });

  res.frontRender('front/post/single', { post, bodyClass: 'single-post' });
};
