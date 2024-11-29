// Shop 数据模型（规范数据结构）

const mongoose = require('../db/db')

// 定义 Shop Schema（数据规范）
const Schema = mongoose.Schema({
    name: String,
    imgUrl: String,
    sales: Number,
    expressLimit: {
        type: Number,
        default: 0
    },
    expressPrice: Number,
    slogan: String
}, {
    // 时间戳，自动添加文档的创建时间等
    timestamps: true
})

// 使用 Shop 规范，定义模型
const Shop = mongoose.model('shop', Schema)

module.exports = Shop