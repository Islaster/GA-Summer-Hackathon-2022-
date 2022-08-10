const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  timestamps: true,
  name: { type: String, required: true },
  zipCode: { type: String, required: true },
  dateAvailable: { type: Date, required: true },
  food: { type: String, required: true },
  description: { type: String, required: true },
  allergens: { type: Boolean, required: True },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "comment",
  },
});

module.exports = mongoose.model("Post", postSchema);
