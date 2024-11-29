// order controller

const Order = require('../models/Order')
const Address = require('../models/Address')
const Product = require('../models/Product')

/**
 * 创建订单
 * @param {String} username 用户名
 * @param {Object} data 订单数据
 */
async function createOrder(username, data) {
    // 根据 data 解构出所需信息
    const {
        addressId,
        shopId,
        shopName,
        isCanceled = false,
        products = []
    } = data
    // 获取 address
    const address = Address.findById(addressId)

    // 获取商品列表
    // ['商品 1 的 id', '商品 2 的 id']
    const pIds = products.map(p => p.id)
    const productList = await Product.find({
        // 对应商店的商品
        shopId,
        _id: {
            $in: pIds
        }
    })
    // 整合订单购买数量
    const productListWithSales = productList.map(p => {
        // 商品 id
        const id = p._id.toString()

        // 找到商品的购买数量
        const filterProducts = products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            throw new Error('未找到匹配的销量数据')
        }
        return {
            product: p,
            orderSales: filterProducts[0].num
        }
    })
    // 创建订单
    const newOrder = await Order.create({
        username,
        shopId,
        shopName,
        isCanceled,
        address,
        products: productListWithSales   // 难！
    })

    return newOrder
}

/**
 * 获取订单列表
 * @param {String} username 用户名
 */
async function getOrderList(username) {
    const list = await Order.find({ username }).sort({ updatedAt: -1 })

    return list
}

module.exports = {
    createOrder,
    getOrderList
}