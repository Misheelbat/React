const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const expire = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expire });
      console.log('token verified', data);
      req.user = data;
    } catch {
      console.log('invalid token');
    }
    return req;
  },
  signToken: function ({ email, _id, name }) {
    const tokenPayload = {
      user_id: _id,
      email,
      name,
    };
    return jwt.sign({ data: tokenPayload }, secret, { expiresIn: expire });
  },
};
