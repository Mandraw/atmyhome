var express = require('express');
var router = express.Router();

/* GET inscription listing. */
router.get('/', function(req, res, next) {
  res.render('inscription', { title: 'AtMyHome' });
});

module.exports = router;
