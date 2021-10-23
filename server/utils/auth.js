const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

// set token secret and expiration date
const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = {email, name, _id };
    return jwt.sign({ data: payload}, secret, { expiresIn: expiration })
  }
};
