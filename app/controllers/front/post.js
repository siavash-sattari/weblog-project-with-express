const postModel = require('@models/post');
const userModel = require('@models/user');
const userService = require('@services/userService');

exports.showPost = async (req, res) => {
  const postSlug = req.params.post_slug;
  const post = await postModel.findBySlug(postSlug);
  
  if (!post) {
    return res.redirect('/404');
  }

  const user = await userModel.find(post.author_id);
  user.avatar = userService.gravatar(user.email);
  post.author = user;

  res.frontRender('front/post/single', { post });
};
