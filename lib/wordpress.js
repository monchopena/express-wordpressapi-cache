var WPAPI = require('wpapi');
var cache = require('memory-cache');

var wp = new WPAPI({
    endpoint: 'https://hmn.md/wp-json', 
    // This assumes you are using basic auth
    // username: 'username',
    // password: 'password'
});

function getPosts(cb) {

  wp.posts().then(function( data ) {
    cb(null, data);
  }).catch(function( err ) {
    cb(error, null);
  });

};

exports.getPosts = getPosts;