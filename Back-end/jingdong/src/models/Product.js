// Product 数据模型（规范数据结构）

const mongoose = require('../db/db')

// 定义 Product Schema（数据规范）
const Schema = mongoose.Schema({
    // 对应商店的 id
    shopId: {
        type: String,
        required: true,  // 必须
    },
    name: String,
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
    tabs: [String]   // 示例：tabs: ['all','seckill']
}, {
    // 时间戳，自动添加文档的创建时间等
    timestamps: true
})

// 使用 Product 规范，定义模型
const Product = mongoose.model('product', Schema)

module.exports = Product