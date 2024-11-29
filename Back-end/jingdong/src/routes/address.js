const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    const data = ctx.request.body
    try {
        // 创建成功
        const newAddress = await createAddress(username, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.error(ex)
        ctx.body = new ErrorModel(1004, `创建收货地址失败 - ${ex.message}`)
    }
})

// 获取收货地址列表
router.get('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 获取
    const list = await getAddressList(username)

    ctx.body = new SuccessModel(list)
})

// 获取单个收货地址
router.get('/:id', loginCheck, async function (ctx, next) {
    const id = ctx.params.id
    // 获取
    const address = await getAddressById(id)
    ctx.body = new SuccessModel(address)
})

// 更新收货地址
router.patch('/:id', loginCheck, async function (ctx, next) {
    const id = ctx.params.id
    const data = ctx.request.body
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 更新
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
})


module.exports = router