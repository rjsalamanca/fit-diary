var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    locals: {
      title: 'Index'
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
