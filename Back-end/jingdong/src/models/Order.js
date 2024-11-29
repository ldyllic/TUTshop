// Order 数据模型（规范数据结构）

const mongoose = require('../db/db')

// 定义 Order Schema（数据规范）
const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true  // 必须
    },
    shopId: String,
    shopName: String,
    isCanceled: {
        type: Boolean,
        default: false
    },  // 订单是否被取消
    address: {
        username: String,
        city: String,
        department: String,
        houseNumber: String,
        name: String,
        phone: String
    },
    products: [
        {
            product: {
                shopId: {
                    type: String,
                    require: true
                },
                name: String,
                imgUrl: String,
                sales: Number, // 月售多少
                price: Number, // 当前价格
                oldPrice: Number, // 原价
                tabs: [String]
            },
            orderSales: Number  // 购买数量
        }
    ]
}, {
    // 时间戳，自动添加文档的创建时间等
    timestamps: true
})

// 使用 Order 规范，定义模型
const Order = mongoose.model('order', Schema)

module.exports = Order