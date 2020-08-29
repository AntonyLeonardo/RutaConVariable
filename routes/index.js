var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to the integration session");
  //res.render('index', { title: 'Express' });
});

router.get('/hello/:name', function(request, response){
  response.send('Hello ' + request.params.name);
});

module.exports = router;
