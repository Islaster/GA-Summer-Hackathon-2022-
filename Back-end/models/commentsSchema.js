const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

const comments = mongoose.model('comment', commentsSchema);
module.exports = Comments;
