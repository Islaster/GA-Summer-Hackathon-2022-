const Comment = require("../models/commentsSchema");
module.exports = {
  create,
  edit,
  delete: deletePost,
};

async function create(req, res) {
  //Create Method thru mongoose
  //saves to database
  const comment = await Comment.create(req.body);
  //responds to request made client-side
  res.json(comment);
}

async function edit(req, res) {
  Comment.findByIdAndUpdate(req.params.id).then(function (comment) {
    comment.name = req.body.name;
    comment.comment = req.body.comment;
  });
}

async function deletePost(req, res) {
  const post = await Post.findOneAndDelete(req.params.id);
  post.remove();
  res.json(post);
}
