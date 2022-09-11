const postModel = require('@models/post');
const userModel = require('@models/user');
const dateService = require('@services/dateService');
const postValidator = require('@validators/post');
const { statuses } = require('@models/post/postStatus');
const { v4: uuidv4 } = require('uuid');

exports.index = async (req, res) => {
  let posts;
  const author = 'user' in req.session && req.session.user.role == 1 ? req.session.user : null;
  if (author) {
    posts = await postModel.findAuthorBlogs(author.id);
  } else {
    posts = await postModel.findAll();
  }

  const presentedPosts = posts.map(post => {
    post.created_at = dateService.toPersianDate(post.created_at);
    return post;
  });

  res.adminRender('admin/posts/index', { posts: presentedPosts });
};

exports.create = async (req, res) => {
  const users = await userModel.findAll(['id', 'full_name']);
  const isAdmin = 'user' in req.session && req.session.user.role == 2 ? req.session.user : null;
  res.adminRender('admin/posts/create', { users, isAdmin });
};

exports.store = async (req, res) => {
  let fileExt = '';
  let newFileName = '';

  if (req.files) {
    fileExt = req.files.thumbnail.name.split('.')[1];
    newFileName = `${uuidv4()}.${fileExt}`;
  }

  const postData = {
    title: req.body.title,
    author_id: req.body.author,
    slug: req.body.slug,
    content: req.body.content,
    status: req.body.status,
    thumbnail: newFileName
  };

  const errors = postValidator.create(postData);
  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect('/admin/posts/create');
  }

  const insertId = await postModel.create(postData);

  if (insertId) {
    if (req.files.thumbnail) {
      const fileNewPath = `${process.cwd()}/public/upload/thumbnails/${newFileName}`;
      req.files.thumbnail.mv(fileNewPath, err => {
        console.log(err);
      });
    }
    req.flash('success', 'مطلب جدید با موفقیت ایجاد شد');
    res.redirect('/admin/posts');
  }
};

exports.remove = async (req, res) => {
  const postID = req.params.postID;
  if (parseInt(postID) === 0) {
    res.redirect('/admin/posts');
  }
  const result = await postModel.delete(postID);
  req.flash('success', 'مطلب موردنظر با موفقیت حذف شد');
  res.redirect('/admin/posts');
};

exports.edit = async (req, res) => {
  const postID = req.params.postID;
  if (parseInt(postID) === 0) {
    res.redirect('/admin/posts');
  }
  const post = await postModel.find(postID);
  const users = await userModel.findAll(['id', 'full_name']);
  const isAdmin = 'user' in req.session && req.session.user.role == 2 ? req.session.user : null;
  res.adminRender('admin/posts/edit', {
    layout: 'admin',
    users,
    post,
    isAdmin,
    postStatus: statuses(),
    helpers: {
      isPostAuthor: function (userID, options) {
        return post.author_id === userID ? options.fn(this) : options.inverse(this);
      },
      isSelectedStatus: function (status, options) {
        return post.status === status ? options.fn(this) : options.inverse(this);
      }
    }
  });
};

exports.update = async (req, res) => {
  const postID = req.params.postID;
  const post = await postModel.find(postID);

  let fileExt = '';
  let newFileName = post.thumbnail;

  if (req.files) {
    fileExt = req.files.thumbnail.name.split('.')[1];
    newFileName = `${uuidv4()}.${fileExt}`;
  }

  if (parseInt(postID) === 0) {
    res.redirect('/admin/posts');
  }

  const postData = {
    title: req.body.title,
    author_id: req.body.author,
    slug: req.body.slug,
    content: req.body.content,
    status: req.body.status,
    thumbnail: newFileName
  };

  const errors = postValidator.create(postData);

  if (errors.length > 0) {
    req.flash('errors', errors);
    return res.redirect(`/admin/posts/edit/${postID}`);
  }

  if (req.files) {
    const fileNewPath = `${process.cwd()}/public/upload/thumbnails/${newFileName}`;
    req.files.thumbnail.mv(fileNewPath, err => {
      console.log(err);
    });
  }
  req.flash('success', 'مطلب موردنظر با موفقیت ویرایش شد');

  const result = await postModel.update(postID, postData);
  return res.redirect('/admin/posts');
};
