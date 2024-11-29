// 登录验证的中间件
const { ErrorModel } = require('../res-model/index')


async function loginCheck(ctx, next) {
    const session = ctx.session || {}
    const userInfo = session.userInfo
    if (userInfo && userInfo.username) {
        // 登录验证通过
        await next()
        return
    }
    // 登录验证失败
    ctx.body = new ErrorModel(10003, '登录验证失败')
}

module.exports = loginCheck