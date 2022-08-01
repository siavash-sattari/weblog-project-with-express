const statistics = require('@models/statistics');

exports.index = async (req, res) => {
  const data = {
    totlaUsers: await statistics.totalUsers(),
    totalPosts: await statistics.totalPosts(),
    totalComments: await statistics.totalComments(),
    totalViews: await statistics.totalViews()
  };

  res.render('admin/dashboard/index', { layout: 'admin', ...data });
};
