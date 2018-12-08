var express = require('express');
var router = express.Router();

/* GET preferences listing. */
router.get('/', function(req, res, next) {
  res.render('preferences', { title: 'AtMyHome' });
});

module.exports = router;
