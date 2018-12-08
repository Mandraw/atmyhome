var express = require('express');
var router = express.Router();

/* GET produit listing. */
router.get('/', function(req, res, next) {
  res.render('produit', { title: 'AtMyHome' });
});

module.exports = router;
