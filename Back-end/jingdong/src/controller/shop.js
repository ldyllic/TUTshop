// shop controller
const Shop = require('../models/Shop')
const Product = require('../models/Product')

/**
 * 获取商店列表
 */
async function getHotList() {
    const shopList = await Shop.find().sort({ _id: -1 })
    return shopList
}

/**
 * 获取商店信息
 * @param {String} id 商店id
 */
async function getShopInfo(id) {
    const shop = await Shop.findById(id)
    return shop
}

/**
 * 根据商店获取商品
 * @param {String} shopId 商店 id
 * @param {String} tab tab 分类
 */
async function getProductByShopId(shopId, tab = 'all') {
    const list = await Product.find({
        shopId,
        tabs: {
            $in: tab
        }
    }).sort({ _id: -1 })
    return list
}

module.exports = {
    getHotList,
    getShopInfo,
    getProductByShopId
}