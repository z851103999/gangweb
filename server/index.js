const express = require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))//上传组件

require('./plugins/db')(app)//连接数据库
require('./routes/admin')(app)//路由

app.set('secret', 'i2u34y12oi3u4y8');//混入toekn


app.listen(3000, () => {
  console.log('http://localhost:3000');
});