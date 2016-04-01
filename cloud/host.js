var express = require('express');
var router = express.Router();

// Parse Server plays nicely with the rest of your web routes
router.get('/', function(req, res) {
  res.status(200).send('Make sure to star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
router.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

module.exports = router;