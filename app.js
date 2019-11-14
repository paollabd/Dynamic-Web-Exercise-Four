const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// routes
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

// static file serving
app.use('/static', express.static('public'))
app.use('/', indexRoute);
app.use('/about', aboutRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))