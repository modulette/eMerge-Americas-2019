const express = require("express"),
    app = express(),
    path = require('path'),
    PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')))
    .use((req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .disable('x-powered-by')
    .listen(PORT, function() {
        console.log(`Server running on port ${PORT}!`);
    });