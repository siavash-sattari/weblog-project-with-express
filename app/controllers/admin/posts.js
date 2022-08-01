const postModel = require('../../models/post');

exports.index = async (req, res) => {
  const posts = await postModel.findAll();
  console.log(posts);
  res.render('admin/posts/index', { layout: 'admin', posts });
};
