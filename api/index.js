var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser'); // post 数据时需要


var app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/api', router);//router路由对象中的路由都会匹配到"/api"路由后面

// 监听端口
app.listen(3000,()=>{
  console.log('服务已启动，端口3000')
})
