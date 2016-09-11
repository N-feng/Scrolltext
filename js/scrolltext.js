;
(function($,window){

	function Scrolltext(config, selector) {
		var defaults = {
			interval: 3000
		};
		this.$selector = selector;
		this.config = $.extend(defaults,config);
		this.init();
	};

	Scrolltext.prototype.init = function() {
		var self = this;
		self.appendSelectorSize();
		self.move();
	};

	Scrolltext.prototype.appendSelectorSize = function() {
		var self = this;
		var $selector = self.$selector;
		$selector.css({"overflow":"hidden"});
	};

	Scrolltext.prototype.move = function() {
		var self = this;
		var config = self.config;
		var $selector = self.$selector;
		var $ul = $selector.find("ul");
		var _moving;
		$selector.hover(function(){
			clearInterval(_moving);
		}, function(){
			_moving = setInterval(function() {
				var _field = $ul.find("li:first");
				var _h = _field.height();
				_field.animate({
					"marginTop": -_h + "px"
				}, 600, function() {
					_field.css("marginTop", 0).appendTo($ul);
				});
			}, config.interval);
		}).trigger("mouseleave");
	};

	$.fn.Scrolltext = function(config) {
		return new Scrolltext(config, this);
	};

})(jQuery,window);