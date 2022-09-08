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

  res.frontRender('front/home/index', {
    posts: postsForPresent,
    pagination,
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
