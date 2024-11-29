const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { createOrder, getOrderList } = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async function (ctx, next) {
    // 当前用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    // 获取订单信息
    const data = ctx.request.body

    // 创建订单
    try {
        const newOrder = await createOrder(username, data)
        ctx.body = new SuccessModel(newOrder)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(10005, `创建订单失败 - ${ex.message}`)
    }
})

// 获取订单列表
router.get('/', loginCheck, async function (ctx, next) {
    // 当前用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 获取
    const orderList = await getOrderList(username)
    ctx.body = new SuccessModel(orderList)
})

module.exports = router