// Gör två st API-anrop, en put, och en GET.
// Skapa en tom lista (ex. products).
// Min put ska ta emot data & addera det till den tomma listan i form av ett objekt i listan.

var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Administration', products});
  console.log("Funkar definitvt!");
});

module.exports = router;