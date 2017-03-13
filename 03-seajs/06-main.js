define(function(require, exports, module){
	var Pagination = require('./module/pagination.js');
	var pager = new Pagination(1,20,5);
	pager.render('.pagination');
})