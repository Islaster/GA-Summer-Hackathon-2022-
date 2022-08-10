const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  name: { type: String, required: true },
  location: { type: String, required: true },
  dateAvailable: { type: Date, required: true },
  food: { type: String, required: true },
  description: { type: String, required: true },
  allergens: { type: Boolean, required: True },
});

const Posts = mongoose.model("post", postSchema);
module.exports = Posts;
