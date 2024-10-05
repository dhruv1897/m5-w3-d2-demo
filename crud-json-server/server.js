const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define Post schema
const postSchema = new mongoose.Schema({
    title: String,
    author: String,
});

// Define Post model
const Post = mongoose.model('Post', postSchema);

// Routes

// Get all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Get a single post by ID
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Create a new post
app.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
    });
    try {
        const newPost = await post.save();
        res.status(201).send(newPost);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// Update a post by ID
app.put('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ message: 'Post not found' });

        post.title = req.body.title;
        post.author = req.body.author;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// Delete a post by ID
app.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).send({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
