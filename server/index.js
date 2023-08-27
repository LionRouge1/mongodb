const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const app = express();

const salt = bcrypt.genSaltSync(10)

app.use(cors());
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

app.listen(4000);

// mongodb+srv://matchoudi:matchoudiMongodb@cluster0.zhzcawz.mongodb.net/

// matchoudiMongodb