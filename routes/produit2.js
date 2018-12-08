var express = require('express');
var router = express.Router();

/* GET produit2 listing. */
router.get('/', function(req, res, next) {
  res.render('produit2');
});

module.exports = router;
