const Post = require("../models/postsSchema");
module.exports = {
  create,
  index,
  detail,
  edit,
  delete: deletePost,
};

async function create(req, res) {
  //Create Method thru mongoose
  //saves to database
  const post = await Post.create(req.body);
  //responds to request made client-side
  res.json(post);
}

async function index(req, res) {
  //Find method thru mongoose
  //Gets all posts
  const posts = await Post.find({});
  res.json(posts);
}

async function detail(req, res) {
  //Find one post using mongoose method
  const post = await Post.findById(req.params.id);
  res.json(post);
}

async function edit(req, res) {
  Post.findByIdAndUpdate(req.params.id).then(function (post) {
    post.name = req.body.name;
    post.location = req.body.location;
    post.dateAvailable = req.body.dateAvailable;
    post.food = req.body.food;
    post.description = req.body.description;
    post.allergens = req.body.allergens;
  });
}

async function deletePost(req, res) {
  const post = await Post.findOneAndDelete(req.params.id);
  post.remove();
  res.json(post);
}
