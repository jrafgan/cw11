const express = require('express');
const config = require('./config');
const cors = require('cors');
const mongoose = require('mongoose');
const comments = require('./app/comments');
const users = require('./app/users');
const posts = require('./app/posts');

const app = express();

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8003;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {
  app.use('/posts', posts);
  app.use('/comments', comments);
  app.use('/users', users);

  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });
});