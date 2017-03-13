define(function(require,exports,module){
	//require 必须执行完成以后(./module2.js加载完成)才可以拿到返回值
	console.log('module1 --- start');
	// var module2 = require("./03-module2.js");//阻塞代码执行
	//容易造成界面卡顿的现象
	require.async('./03-module2.js',function(module2){

	}); 
	console.log('module1 --- end');
});