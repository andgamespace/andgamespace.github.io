const express = require('express');
const path = require('path');
const fs = require('fs');
const marked = require('marked');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    const postsDir = path.join(__dirname, 'posts');
    const files = fs.readdirSync(postsDir);
    const posts = files.map(file => {
        const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
        const lines = content.split('\n');
        const title = lines[0].replace('# ', '');
        const date = file.substring(0, 10);
        const slug = file.substring(11, file.length - 3);
        return { title, date, slug, content };
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    res.render('index', { posts });
});

// Route for individual blog posts
app.get('/post/:slug', (req, res) => {
    const slug = req.params.slug;
    const filePath = path.join(__dirname, 'posts', `${slug}.md`);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        const title = lines[0].replace('# ', '');
        const date = filePath.substring(0, 10);
        const markdownContent = marked(content);
        res.render('post', { title, date, content: markdownContent });
    } else {
        res.status(404).send('Post not found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
