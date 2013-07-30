jquery-scroll-low
======================

JQuery Infinite Scroll Plugin. Super Simple and easy to use.

```javascript
$(window).scrollLow({
    callback: function(pageNum){}, //handle scroll evenets
    throttleWait: 2000,            //trigger at most one callback per 2s
    scrollCheckInterval: 200       //check scroll position every 200ms
});
```

Demo:
http://jsfiddle.net/shaw3257/2ZQRV
