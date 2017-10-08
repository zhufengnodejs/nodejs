var fs = require('fs');
fs.readFile('./1.txt','utf8',function(err,data){
 //err 错误对象，如果读取文件失败了，会把错误的原因写在err里，如果成功了err=null
 //data是数据对象，
 console.log(err);
 console.log(data);
});