const postModel = require('@models/post');
const userModel = require('@models/user');
const dateService = require('@services/dateService');

exports.index = async (req, res) => {
  const posts = await postModel.findAll();

  const presentedPosts = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);
    return post;
  });

  res.render('admin/posts/index', { layout: 'admin', posts: presentedPosts });
};

exports.create = async (req, res) => {
  const users = await userModel.findAll(['id', 'full_name']);
  res.render('admin/posts/create', { layout: 'admin', users });
};

exports.store = async (req, res) => {
  const postData = {
    title: req.body.title,
    author_id: req.body.author,
    slug: req.body.slug,
    content: req.body.content,
    status: req.body.status
  };
  const result = await postModel.create(postData);
  res.send(req.body);
};
