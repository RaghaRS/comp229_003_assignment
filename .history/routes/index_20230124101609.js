var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mainHeading' });
});

router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/', function(req, res, next) {
  res.render('Contact', { title: 'Contact Us' });
});

router.get('/', function(req, res, next) {
  res.render('Product', { title: 'Contact Us' });
});
module.exports = router;
