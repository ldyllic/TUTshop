const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { getHotList, getShopInfo,getProductByShopId } = require('../controller/shop')

router.prefix('/api/shop')

// 附近(热门)商店列表
router.get('/hot-list', async function (ctx, next) {
    // 获取列表
    const list = await getHotList()
    ctx.body = new SuccessModel(list)
})

// 单个商店的信息
router.get('/:id', async function (ctx, next) {
    const id = ctx.params.id
    // 获取信息
    const shop = await getShopInfo(id)
    ctx.body =new SuccessModel(shop)
})

// 获取商店的商品
router.get('/:id/products',async function (ctx, next) {
    const shopId = ctx.params.id
    // 如果 query 中没有 tab 参数，默认为 all
    const tab = ctx.query.tab || 'all'
    // 获取信息
    const products = await getProductByShopId(shopId,tab)
    ctx.body =new SuccessModel(products)
})


module.exports = router