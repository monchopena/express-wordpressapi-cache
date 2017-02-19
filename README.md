
# Express.js, Wordrpress API and Cache

This is a sample made with [express.js][express.js] and 2 libraries: [node-wpapi][node-wpapi] and [node-cache][node-cache].

<pre>
git clone https://github.com/monchopena/express-wordpressapi-cache
cd express-wordpressapi-cache
npm i
npm start
</pre>

Go to [http://localhost:3000/][http://localhost:3000/].

Into "lib/wordpress.js" you can put your API url page.

This is the file where we are checking if we can access to cached data "routes/index.js".

```javascript
var isCached = 'posts';
var cachePosts = cache.get(isCached);
```

If we can't access to cached data then we get the posts from the API and the create the cache.

```javascript
cache.put('posts', passPosts, 5000); // 5 seconds
```

In this case we put 5000ms. If time isn't passed in, it is stored forever.

Using cache, displaying the pages will be much more efficient.

The [blog entry][blog-entry].

[express.js]: http://expressjs.com/
[node-wpapi]: https://github.com/WP-API/node-wpapi
[node-cache]: https://github.com/ptarjan/node-cache
[repository]: https://github.com/monchopena/express-wordpressapi-cache
[blog-entry]: http://www.bdunk.com/express-wordpressapi-cache
[http://localhost:3000/]: http://localhost:3000/