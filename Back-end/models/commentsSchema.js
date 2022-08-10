const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  timestamps: true,
});

const comments = mongoose.model("comment", commentSchema);
module.exports = comments;
