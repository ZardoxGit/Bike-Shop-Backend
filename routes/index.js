var express = require('express');
var router = express.Router();

var dataBike = [
  { name: "BIK045", url: "/images/bike-1.jpg", price: 679 },
  { name: "ZOOK07", url: "/images/bike-2.jpg", price: 999 },
  { name: "TITANS", url: "/images/bike-3.jpg", price: 799 },
  { name: "CEWO",   url: "/images/bike-4.jpg", price: 1300},
  { name: "AMIG39", url: "/images/bike-5.jpg", price: 479 },
  { name: "LIK099", url: "/images/bike-6.jpg", price: 869 }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
});

var dataCardBike = [
  { position: 1, url: "/images/bike-1.jpg", name: "BIK045", quantity: 1, price: 679 },
  { position: 2, url: "/images/bike-2.jpg", name: "ZOOK07", quantity: 2, price: 999 }
  
]

router.get('/shop', function(req, res, next) {
  res.render('shop', {dataCardBike});
});

module.exports = router;
