define(function(require,exports,module){
	//此处是模块的私有空间
	var convertor = require('./01-convert.js'); //拿回一个exports对象
 
	function add(a,b) {
			return convertor.convertToNumber(a) + convertor.convertToNumber(b);
	}
	function subtract(a,b) {
		return convertor.convertToNumber(a) - convertor.convertToNumber(b);
	}
	function multiply(a,b) {
		return convertor.convertToNumber(a) * convertor.convertToNumber(b);
	}
	function divid(a,b) {
		return convertor.convertToNumber(a) / convertor.convertToNumber(b);
	}

	//暴露模块的公共成员
	exports.add = add;
	exports.subtract = subtract;
	exports.multiply = multiply;
	exports.divid = divid;
});