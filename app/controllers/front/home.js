const postModel = require('@models/post');
const dateService = require('@services/dateService');

exports.index = async (req, res) => {
  const posts = await postModel.findAll();
  const postForPresent = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);

    const words = post.content.split(' ');
    post.excerpt = words.slice(0, 20 - 1).join(' ') + ' ...';

    return post;
  });

  res.frontRender('front/home/index', { posts: postForPresent });
};
