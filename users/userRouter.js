const express = require('express');

const router = express.Router();
const userdb = require('./userDb');
router.use('/:id', validateUserId);

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  userdb
    .get()
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log('User Get Error: ', err);
      res.status(500).json({ error: 'Users could not be retrived' });
    });
});

router.get('/:id', (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  userdb
    .getById(req.params.id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(400).json({ message: 'Invalid user id.' });
      }
    })
    .catch(err => {
      err => {
        console.log('Get User By Id Error:', err);
        res
          .status(500)
          .json({ message: `There was a problem retriving the user` });
      };
    });
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
