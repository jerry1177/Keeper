const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = user => {
    if (!user.role) throw new Error("No user role assigned");

    return jwt.sign({
        sub: user.id,
        email: user.email,
        role: user.role,
        password: user.password
    }, 
    process.env.JWT_SECRET, 
    { algorithm: 'HS256', expiresIn: '24hr' });
}

const hashPassword = password => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  };

  const verifyPassword = ( passwordAttempt,hashedPassword) => {
    return bcrypt.compare(passwordAttempt, hashedPassword);
  };

  const requireAdmin = (req, res, next) => {
    if (!req.user) {
        return res.statuse(401)
        .json({ message: 'There was a problem authorizing the request' })
    }
    if (!req.user.role !== 'admin') {
        return res.status(401)
        .json({ message: 'Insufficient Authorization' });
    }

    next();
  };

  module.exports = { 
      createToken, 
      hashPassword, 
      verifyPassword, 
      requireAdmin 
    }