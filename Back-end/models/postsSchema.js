const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    timestamps: true,
    name: {type: String, required: true},
    zipCode: {type: String, required: true},
    dateAvailable: {type: Date, required: true}, 
    food: {type: String, required: true},
    description: {type: String, required: true},
    allergens: {type: Boolean, required: True}
})

const posts = mongoose.model('post', postSchema);
module.exports = Posts;
