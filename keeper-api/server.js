require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwtDecode = require('jwt-decode');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');

const User = require('./data/user');
const Note = require('./data/note');

const {
    createToken,
    hashPassword,
    verifyPassword
} = require('./util');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/user/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || !email.trim() || !password.trim()) {
      return res.status(403).json({message: "invalid input!"})
    }

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(403).json({
         message: 'Wrong email or password.'
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const { password, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.cookie('token', token, { httpOnly: true });

      res.status(200).json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else {
      res.status(400).json({
        message: 'Wrong email or password.'
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({message:"something went wrong!"});
  }
});

app.get('/', (req, res) => {
    return res.status(200).json({message:"Hello World!"});
});

async function connect() {
    try {
      mongoose.Promise = global.Promise;
      
      await mongoose.connect(process.env.ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
      console.log("connected!");
    } catch (err) {
      console.log('Mongoose error', err);
    }
    
  }

  app.listen(3001, ()=>{
    const arr = ["hey", "lie", "joke"];
    arr[100] = "hi";
    console.log(arr.length);
    console.log('API listening on localhost:3001');
  });

  connect();