const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const app = express();

const secret = 'jske830dkdld@*93!';
const salt = bcrypt.genSaltSync(10)

app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:3000',
}));
app.use(express.json());

mongoose.connect('mongodb+srv://matchoudi:matchoudiMongodb@cluster0.zhzcawz.mongodb.net/');

app.post('/register', async (req, res) => {
  const {username, password, pwdConfirm} = req.body;

  try{
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e)
  }
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk) {
    //login
    jwt.sign({username, id: userDoc.id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie(token).json('ok');
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.listen(4000);

// mongodb+srv://matchoudi:matchoudiMongodb@cluster0.zhzcawz.mongodb.net/

// matchoudiMongodb