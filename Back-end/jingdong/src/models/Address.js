// Address 数据模型（规范数据结构）

const mongoose = require('../db/db')

// 定义 Address Schema（数据规范）
const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,  // 必须
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String
}, {
    // 时间戳，自动添加文档的创建时间等
    timestamps: true
})

// 使用 Address 规范，定义模型
const Address = mongoose.model('address', Schema)

module.exports = Address