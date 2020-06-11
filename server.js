const express = require('express');

const server = express();
// routers import
const UserRouther = require('./users/userRouter');

server.use(express.json());
server.use(logger);

// router use

server.use('/api/users', UserRouther);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.ip}`
  );

  next();
}

module.exports = server;
