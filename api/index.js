const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { config } = require('./config');

const app = express();

app.use(bodyParser.json())

app.post('/api/auth/token', (req, res) => {
  const {email, username, name} = req.body;
  const token = jwt.sign({sub: username, email, name }, config.authJwtSecret);
  res.status(200).json({access_token: token});
});

app.get('/api/auth/verify', (req, res, next) => {
  const { access_token } = req.query;
  try {
    const decode = jwt.verify(access_token, config.authJwtSecret);
    res.json({'message': 'the access token is valid', 'name': decode.sub})
  } catch (error) {
    next(e);
  }
})

const server = app.listen(5000, () => {
  console.log(`Listening at port http://localhost:${server.address().port}`);
});
