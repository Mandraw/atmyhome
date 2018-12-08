var express = require('express');
var router = express.Router();

/* GET recherche listing. */
router.get('/', function(req, res, next) {
  res.render('recherche');
});

module.exports = router;
