const postModel = require('@models/post');
const dateService = require('@services/dateService');

exports.index = async (req, res) => {
  const posts = await postModel.findAll();

  const presentedPosts = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);
    return post;
  });

  res.render('admin/posts/index', { layout: 'admin', posts: presentedPosts });
};
