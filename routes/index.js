var express = require('express');
var router = express.Router();
var cache = require('memory-cache');
var wordpress = require('../lib/wordpress.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var isCached = 'posts';
  var cachePosts = cache.get(isCached);
  var title;
  if (cachePosts) {
  	title = 'Cached Page'
  	res.render('index', { title: title, posts: cachePosts });
  } else {
  	title = 'Page'
  	wordpress.getPosts(function(err, passPosts) {
  		if (err) {
  			console.log(err);
  			res.json({ err: err});
  		} else {
	  		// console.log(passPosts);
	  		cache.put('posts', passPosts, 5000); // 5 seconds
	  		res.render('index', { title: title, posts: passPosts });
	  	}
	  });
  }
});

module.exports = router;
