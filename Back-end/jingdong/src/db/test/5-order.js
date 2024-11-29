// 订单数据操作

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async () => {
    // 创建订单
    // const requestBody = {
    //     addressId: '6746eb3a1d75fa3835c7e54c',
    //     shopId: '6746fbf9d7bf7e814a22ada3',
    //     shopName: '沃尔玛',
    //     isCanceled: false,  // 订单是否被取消
    //     products: [
    //         {
    //             id: '6746fe4ad776517b20401021',
    //             num: 3  // 购买数量
    //         },
    //         {
    //             id: '6746fe4ad776517b20401024',
    //             num: 5  // 购买数量
    //         }
    //     ]
    // }

    // // 获取 address
    // const address = Address.findById(requestBody.addressId)

    // // 获取商品列表
    // // ['商品 1 的 id', '商品 2 的 id']
    // const pIds = requestBody.products.map(p => p.id)
    // const productList = await Product.find({
    //     // 对应商店的商品
    //     shopId: requestBody.shopId,
    //     _id: {
    //         $in: pIds
    //     }
    // })

    // // 整合订单购买数量
    // const productListWidthSales = productList.map(p => {
    //     // 商品 id
    //     const id = p._id.toString()

    //     // 找到商品的购买数量
    //     const filterProducts = requestBody.products.filter(item => item.id === id)
    //     if (filterProducts.length === 0) {
    //         throw Error('未找到匹配的销量数据')
    //     }
    //     return {
    //         product: p,
    //         orderSales: filterProducts[0].num
    //     }
    // })

    // await Order.create({
    //     username: '15072719839',
    //     shopId: requestBody.shopId,
    //     shopName: requestBody.shopName,
    //     isCanceled: requestBody.isCanceled,
    //     address,
    //     products: productListWidthSales   // 难！
    // })

    // 获取订单列表
    const username = '15072719839'
    const list = await Order.find({
       username
    })
    console.log(list);

})()