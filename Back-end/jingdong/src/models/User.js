// User 数据模型（规范数据结构）

const mongoose = require('../db/db')

// 定义 User Schema（数据规范）
const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,  // 必须
        unique: true     // 唯一不重复
    },
    password: String
}, {
    // 时间戳，自动添加文档的创建时间等
    timestamps: true
})

// 使用 User 规范，定义模型
const User = mongoose.model('user', Schema)

module.exports = User