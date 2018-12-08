var express = require('express');
var router = express.Router();

/* GET immo listing. */
router.get('/', function(req, res, next) {
  res.render('immo');
});

module.exports = router;
