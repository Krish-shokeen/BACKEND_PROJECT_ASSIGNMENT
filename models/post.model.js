
// models/post.model.js

// import mongoose
const mongoose = require('mongoose');

// Post Schema Definition
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        minimim : 5
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    tags: {
        type: [String]
    
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;