var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	//请求行 URL字段
  var url = req.url;
  console.log(url);
  if(url == '/favicon.ico'){
  	res.end('404');
  	return ;
  }
  if(url == '/'){
	res.setHeader('Content-Type','text/html;charset=utf-8');
	  fs.readFile('./index.html',function(err,data){
	    if(err){
	    	//end = write+end end方法不能接收对象类型的响应体，只能放字符串或者Buffer
	    	res.end(err.toString());
	    }else{
	    	res.end(data);
	    }
	  });
  }else if(url == '/index.css'){
	   res.setHeader('Content-Type','text/css;charset=utf-8');
		  fs.readFile('./index.css',function(err,data){
		    if(err){
		    	//end = write+end end方法不能接收对象类型的响应体，只能放字符串或者Buffer
		    	res.end(err.toString());
		    }else{
		    	res.end(data);
		    }
		  });
  }else{
  	///状态码 200 就是成功了 404资源 未找到
  	res.end('404');
  }
  
});
server.listen(80);
