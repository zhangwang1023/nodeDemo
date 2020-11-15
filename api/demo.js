const x = 1
const y = 2
const z = 3
//记录打印了几次
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
//为打印文本添加样式 可使用库chalk  chalk.yellow('你好')
console.log('\x1b[33m%s\x1b[0m', '你好')

//读取静态文件
//如果前台想请求后台public目录下images/08.jpg静态的图片资源
//通过： http://localhost:3000/images/08.jpg
app.use(express.static('public'));
app.use(express.static('file'));