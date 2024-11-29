// 连接数据库

const mongoose = require('mongoose')

// 本地默认的服务地址
const url = 'mongodb://localhost:27017';

// 数据库名字
const dbName = 'jingdongDB';

// 连接数据库
mongoose.connect(`${url}/${dbName}`)

// 获取连接对象
const conn = mongoose.connection

conn.on('error', err => {
    console.error("mongodb 连接出错", err)
})


module.exports = mongoose