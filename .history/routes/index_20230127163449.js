var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

router.get('services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

router.get('/Products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
module.exports = router;
