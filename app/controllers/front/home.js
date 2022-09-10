const postModel = require('@models/post');
const dateService = require('@services/dateService');

exports.index = async (req, res) => {
  const page = 'page' in req.query ? parseInt(req.query.page) : 1;
  const perPage = 3;
  const posts = await postModel.findAll(page, perPage);
  const totalPosts = await postModel.count();
  const totalPages = Math.ceil(totalPosts / perPage);

  const pagination = {
    page,
    totalPages,
    nextPage: page < totalPages ? page + 1 : totalPages,
    prevPage: page > 1 ? page - 1 : 1,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };

  const postsForPresent = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);

    const words = post.content.split(' ');
    post.excerpt = words.slice(0, 20 - 1).join(' ') + ' ...';

    return post;
  });

  const latestPosts = await postModel.latestPosts(3);
  const latestPostsForPresent = latestPosts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);
    return post;
  });

  const isAuthor = 'user' in req.session && req.session.user.role == 1 ? true : false;

  res.frontRender('front/home/index', {
    posts: postsForPresent,
    pagination,
    isAuthor,
    latestPosts: latestPostsForPresent,
    helpers: {
      showDisabled: function (isDisabled, options) {
        return !isDisabled ? 'disabled' : '';
      }
    }
  });
};

exports.search = async (req, res) => {
  const posts = await postModel.findByKeyword(req.query.keyword);
  const postsForPresent = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);
    const words = post.content.split(' ');
    post.excerpt = words.slice(0, 20 - 1).join(' ') + ' ...';
    return post;
  });

  res.frontRender('front/home/search', {
    posts: postsForPresent
  });
};
