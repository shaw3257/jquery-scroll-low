/*
 * ScrollLow
 * Simple infinite scrolling plugin
 * Author: Shawn O'Mara
 * Licensed under the MIT license
 */

;(function( $, window, document, undefined ){

  var Plugin = function( elem, options ){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;

      this.metadata = this.$elem.data( 'plugin-options' );
    };

  Plugin.prototype = {
    defaults: {
      scrollBuffer: 100,
	  callback : function(pageNum){
		  alert('Ajax call goes here');
	  }
    },

    _init: function() {
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.sampleMethod();
      return this;
    }
  }

  Plugin.defaults = Plugin.prototype.defaults;

  $.fn.scrollLow = function(options) {
    return this.each(function() {
      new Plugin(this, options)._init();
    });
  };

})( jQuery, window , document );