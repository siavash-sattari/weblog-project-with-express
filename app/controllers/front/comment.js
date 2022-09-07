const postModel = require('@models/post');
const commentModel = require('@models/comment');

exports.store = async (req, res) => {
  const post = await postModel.findBySlug(req.params.post_slug);

  if (!post) {
    res.redirect('/404');
  }

  const { user_name, user_email, user_url, user_comment } = req.body;

  const commentData = {
    author_id: 'user' in req.session ? req.session.user.id : null,
    post_id: post.id,
    user_name,
    user_email,
    user_url,
    comment: user_comment
  };

  const result = await commentModel.create(commentData);

  if (result) {
    res.redirect(`/p/${post.slug}`);
  }
};
