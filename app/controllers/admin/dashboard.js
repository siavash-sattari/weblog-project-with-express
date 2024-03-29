const statistics = require('@models/statistics');
const commentModel = require('@models/comment');
const dateService = require('@services/dateService');

exports.index = async (req, res) => {
  let data;
  let latestComments;
  const author = 'user' in req.session && req.session.user.role == 1 ? req.session.user : null;

  if (author) {
    data = {
      totalPosts: await statistics.totalAuthorPosts(author.id),
      totalComments: await statistics.totalAuthorComments(author.id)
    };
    latestComments = await commentModel.latestAuthorComments(author.id, 3);
  } else {
    data = {
      totlaUsers: await statistics.totalUsers(),
      totalPosts: await statistics.totalPosts(),
      totalComments: await statistics.totalComments(),
      totalViews: await statistics.totalViews()
    };
    latestComments = await commentModel.latestComments(3);
  }

  let areThereAnyComments = true;
  if (latestComments.length === 0) {
    areThereAnyComments = false;
  }

  const presentedComments = latestComments.map(comment => {
    comment.created_at = dateService.toPersianDate(comment.created_at);
    return comment;
  });

  res.adminRender('admin/dashboard/index', { layout: 'admin', latestComments: presentedComments, areThereAnyComments, author, ...data });
};
