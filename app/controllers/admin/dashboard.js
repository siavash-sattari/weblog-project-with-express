exports.index = (req, res) => {
  const data = {
    totlaUsers: 10,
    totalPosts: 20,
    totalComments: 30,
    totalViews: 40
  };

  res.render('admin/dashboard/index', { layout: 'admin', ...data });
};
