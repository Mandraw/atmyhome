var express = require('express');
var router = express.Router();

/* GET utilisateur listing. */
router.get('/', function(req, res, next) {
  res.render('utilisateur', { title: 'AtMyHome' });
});

module.exports = router;
