/*
 * Jquery ScrollLow Plugin
 * Simple infinite scrolling
 * Author: Shawn O'Mara
 * Licensed under the MIT license
 */

;(function( $, window, document, undefined ){

    var Plugin = function( elem, options ){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.counter = 0;
    };

    Plugin.prototype = {
        defaults: {
            scrollBuffer: 100,
            callback : function(pageNum){
                alert('Ajax call goes here');
            }
        },
        _widthFromBottom: function(){
            return 0 + $(document).height() - $(window).scrollTop() - $(window).height();
        },

        _incrementCounter: function(){
            this.counter++;
        },

        _throttle: function(func, wait, immediate) {
            var root = this;
            var context, args, result;
            var timeout = null;
            var previous = 0;
            var later = function() {
                previous = new Date;
                timeout = null;
                result = func.apply(context, args);
                root._incrementCounter();
            };
            return function() {
                var now = new Date;
                if (!previous && immediate === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                    root._incrementCounter();
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },

        init: function() {
            var root = this;
            this.config = $.extend({}, this.defaults, this.options);
            this.cb = this._throttle(root.config.callback, 1000, true);
            setInterval(function(){
                if(root._widthFromBottom() < 100){
                    root.cb.apply(root, [root.counter]);
                }
            }, 200);
            return this;
        }
    }

    Plugin.defaults = Plugin.prototype.defaults;

    $.fn.scrollLow = function(options) {
        return this.each(function() {
            new Plugin(this, options).init();
        });
    };

})( jQuery, window , document );