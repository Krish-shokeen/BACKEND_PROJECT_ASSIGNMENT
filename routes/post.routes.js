// routes/post.routes.js

// import express
const express = require("express");
const router = express.Router();

// import post model
const Post = require("../models/post.model");

// Route 1: Create a new post
// POST /api/create/posts
router.post("/create/posts", async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            tags: req.body.tags,
            likes: req.body.likes
        });

        const savedPost = await newPost.save();
        return res.status(201).json(savedPost);

    } catch (error) {
        // Handle validation and other errors
        return res.status(400).json({ message: error.message });
    }
});


// Route 2: Retrieve all posts
// GET /api/posts
router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find({}); // Find all documents
        return res.status(200).json(posts);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;