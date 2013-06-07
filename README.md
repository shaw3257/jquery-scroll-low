simple-infinite-scroll
======================

Super simple and easy to use endless scroll plugin for jQuery.

```javascript
$(window).scrollLow({
    callback: function(pageNum){}, //handle scroll evenets
    throttleWait: 2000,            //trigger at most one callback per 2s
    scrollCheckInterval: 200       //check scroll position every 200ms
});
```
