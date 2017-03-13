### Seajs

### 使用步骤

1. 在页面中引入sea.js文件 
2. 定义一个主模块文件，比如:main.js 
3. 在主模块文件中通过define的方式定义一个模块，并导出公共成员
4. 在页面的行内脚本中通过seajs.use('path',fn)的方式使用模块
5. 回调函数的参数传过来的就是模块中导出的成员对象


### 定义一个模块 
define(function(require,exports,module){

});

### 使用一个模块
- seajs.use('',function(){
	
});
  + 一般用于入口模块
	+ 一般只会使用一次

- require 模块与模块之间

### 导出某块的方式
- module.exports
- exports.xxx 
- return(不多)
- 三种方式的优先级
- return > module.exports > exports.xxx

### 使用第三方依赖(jQuery)

- 由于CMD是国产货，jquery默认不支持

- 改造