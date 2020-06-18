let users = [];

const addUser = (id, video) =>
  users.push({
    id,
    video,
  });

const getViews = (video) => users.filter((user) => user.video === video).length;

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1)[0];
  }
};

module.exports = {
  addUser,
  getViews,
  removeUser,
};
