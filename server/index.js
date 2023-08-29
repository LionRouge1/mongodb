const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();

const secret = 'jske830dkdld@*93!';
const salt = bcrypt.genSaltSync(10);
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use(express.json());

mongoose.connect('mongodb+srv://mongofirst:uEDQya466V0TghTC@cluster0.gsiqstd.mongodb.net/');

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
      res.cookie('token', token).json('ok');
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.listen(4000);

// mongodb+srv://mongofirst:uEDQya466V0TghTC@cluster0.gsiqstd.mongodb.net/

// uEDQya466V0TghTC
