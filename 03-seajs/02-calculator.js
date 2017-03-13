define(function(require,exports,module){
	//此处是模块的私有空间
	
	function add(a,b) {
			return parseFloat(a) + parseFloat(b);
	}
	function subtract(a,b) {
		return parseFloat(a) - parseFloat(b);
	}
	function multiply(a,b) {
		return parseFloat(a) * parseFloat(b);
	}
	function divid(a,b) {
		return parseFloat(a) / parseFloat(b);
	}

	// //暴露模块的公共成员
	// exports.add = add;
	// exports.subtract = subtract;
	// exports.multiply = multiply;
	// exports.divid = divid;

	// console.log(module.exports == exports);  //true;

	// function Person(name,age,gender){
	// 	this.name = name;
	// 	this.age = age;
	// 	this.gender = gender;
	// }
	// Person.prototype.sayHi = function(){
	// 	console.log('hi! I am a Coder,my name is' + this.name);
	// };

	// exports.Person = Person;
	// module.exports = Person;
	module.exports = { name : 'world'}
	//此时module.exports指向的是一个新的地址
	exports.name = 'hello';
	// exports是module.mo
	// 同时出现以module.exports的快捷方式，指向的仍然是原本的地址
	return {name:'你好'};
});