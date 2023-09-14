const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.jsx');
const Post = require('./models/Post.jsx');
const fs = require('fs');

const uploadMiddleware = multer({dest: 'uploads/'});

const app = express();

const secret = 'jske830dkdld@*93!';
const salt = bcrypt.genSaltSync(10);
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/blog_database');

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // login
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        username,
        id: userDoc._id
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  // console.log(token);
  if (token) {
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  };
});

app.delete('/logout', (req, res) => {
  // const { token } = req.cookies;
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('image'), (req, res) => {
  const { originalname, path } = req.file;
  const { title, summary, content } = req.body;
  const parts =originalname.split('.');
  const ext = parts[parts.length -1];
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  // console.log(token);
  jwt.verify(token, secret, {}, async(err, info) => {
    if (err) throw err;

    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });

    res.json(postDoc);
  });
});

app.put('/post', uploadMiddleware.single('image'), async (req, res) => {
  let newPath = null
  if (req.file) {
    const { originalname, path } = req.file;
    const { title, summary, content } = req.body;
    const parts =originalname.split('.');
    const ext = parts[parts.length -1];
    newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  // console.log(token);
  jwt.verify(token, secret, {}, async(err, info) => {
    if (err) throw err;

    const { id, content, title, summary } = req.body;
    const postDoc = await Post.findById(id);
    const isAuth = JSON.stringify(postDoc.author) === JSON.stringify(info.id);

    if (!isAuth) {
      return res.status(400).json('Your not the author');
    }

    await postDoc.updateOne({
      title,
      content,
      summary,
      cover: newPath || postDoc.cover,
    })
    // res.json({ isAuth, postDoc, info });
    // const postDoc = await Post.findById({
    //   title,
    //   summary,
    //   content,
    //   cover: newPath,
    //   author: info.id,
    // });

    res.json(postDoc);
  });
});

app.get('/posts', async (req, res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await Post.findById(id).populate('author', ['username']));
})

app.listen(4000);

// mongodb+srv://mongofirst:uEDQya466V0TghTC@cluster0.gsiqstd.mongodb.net/

// uEDQya466V0TghTC
