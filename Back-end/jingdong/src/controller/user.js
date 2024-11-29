// user controller
const User = require('../models/User')


/**
 * 注册功能
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns 
 */
async function register(username, password) {
    // 保存到数据库
    const newUser = await User.create({ username, password })
    return newUser
}


/**
 * 登录功能
 * @param {String} username 用户名
 * @param {String} password 密码
 */
async function login(username, password) {
    // 查询数据库
    const user = await User.findOne({ username, password })
    if (user != null) {
        // 登录成功
        return true
    }
    // 登录失败
    return false
}



module.exports = {
    register,
    login
}
