const statistics = require('@models/statistics');
const commentModel = require('@models/comment');

exports.index = async (req, res) => {
  const data = {
    totlaUsers: await statistics.totalUsers(),
    totalPosts: await statistics.totalPosts(),
    totalComments: await statistics.totalComments(),
    totalViews: await statistics.totalViews()
  };

  const latestComments = await commentModel.latestComments(3);

  let areThereAnyComments = true;
  if (latestComments.length === 0) {
    areThereAnyComments = false;
  }

  res.adminRender('admin/dashboard/index', { layout: 'admin', latestComments, areThereAnyComments, ...data });
};
