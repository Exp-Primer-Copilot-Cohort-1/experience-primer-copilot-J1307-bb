// Create web server
// Use express to create a simple web server
const express = require('express');
const app = express();
const port = 3000;

// Use body-parser to parse the body of incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use the comments module to handle the comments
const comments = require('./comments');

// Add a new comment
app.post('/comments', (req, res) => {
    const { name, content } = req.body;
    comments.addComment(name, content);
    res.send('Comment added');
});

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Start the web server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});