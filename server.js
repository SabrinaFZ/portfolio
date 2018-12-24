const express = require('express');
const app = express();
const path = require('path');

// configure enviroment variables
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

// configure static files
const publicPath = express.static(path.join(__dirname, './dist'));
app.use(publicPath);

// routes
app.get('/', (req, res)=> {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start server
app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT}/`)
});