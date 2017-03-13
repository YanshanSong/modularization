define(function(require,exports,module){
	//body...
	function Pagination(current,total,show){
		this.current = current;
		this.total = total;
		this.show = show;
		// 当前页
		var current = 1;   // 3 4 5
		// 共有几页
		var total = 20;
		// 显示几个(单数)
		var show = 5;
		// 1.根据显示数量算出正常情况当前页的左右各有几个
		var region = Math.floor(show / 2);
		// 2.计算出当前界面上的起始值
		var begin = current - region;   //可能小于1
		begin = begin < 1 ? 1 : begin;

		var end = begin + show - 1;
		// end = end > total ? total : end;

		// for (var i = begin; i <= end; i++) {
		// 	console.log(i);
		// }

		// 始终保持显示个数为5
		if(end > total) {
			end = total ;
			begin = end - show + 1;
			begin = begin < 1 ? 1 : begin;   //这一步的校验很重要
			}

		this.begin = begin;
		this.end = end;
		};
		
	Pagination.prototype.render = function(containers) {
			// 获取分页容器
		if(typeof containers == 'string'){
			containers = document.querySelectorAll(containers);
		}
		if(containers.length === undefined){
			// dom对象
			containers = [containers];
		}
		for(var c = 0; c < containers.length; c++){
			var container = containers[c];
		}
		//先append上一页
		var preElement = document.createElement('li');
		preElement.innerHTML = '<a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
		container.appendChild(preElement);
		if(this.current == 1){
			preElement.setAttribute('class','disabled');
		}

		//分页
		for(var i = this.begin; i <= this.end; i++){
			var liElement = document.createElement('li');
			liElement.innerHTML = '<a href="#">' + i + '</a>';
			container.appendChild(liElement);
			if(i == this.current) {
				liElement.setAttribute('class', 'active');       
			}
		}

		//再append下一页
		var nextElement = document.createElement('li');
		nextElement.innerHTML = '<a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>'
		container.appendChild(nextElement)
		if(this.current == this.total){
			nextElement.setAttribute('class','disabled');
		}
	};

	module.exports = Pagination;	
});