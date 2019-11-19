const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');

// routes
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');
const postRoute = require('./routes/post.js');
const submitRoute = require('./routes/submit.js');

// static file serving
// app.use('/static', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);
app.use('/post', postRoute);
app.use('/submit', submitRoute);

app.use("/submit-form", (req, res) => 
	res.sendFile("/public/form.html", { root: __dirname})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))