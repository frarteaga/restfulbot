var express = require('express');
var router = express.Router();

var users = [
  {
    'Name': 'user 1', 'Age': 27
  },
  {
    'Name': 'user 2', 'Age': 25
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
