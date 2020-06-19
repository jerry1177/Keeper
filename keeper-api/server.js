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

app.get('/', (req, res) => {
    return res.status(200).json({message:"Hello World!"});
})

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
    console.log('API listening on localhost:3001');
  });