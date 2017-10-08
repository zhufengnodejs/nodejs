var http = require('http');
//监听函数 回调函数
// req = request 请求对象，代表客户端的请求，请求行 请求头 请求体
// res = response 响应对象 ，代表客户端的响应，响应行 响应头 响应体
var serve = function(req,res){
	//编辑器 utf-8 浏览器 GBK
	res.setHeader("Content-Type","text/html;charset=utf-8");
	res.write('当前时间:');
 res.write(new Date().toLocaleString());
 res.write('');
 res.end();// 调用end方法则意味着响应结束了
}
var server = http.createServer(serve);
server.listen(80);
