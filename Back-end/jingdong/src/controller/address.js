// address controller

const Address = require('../models/Address')

/**
 * 创建收货地址
 * @param {String} username 用户名
 * @param {Object} data 地址的详细信息
 * @returns 
 */
async function createAddress(username, data) {
    const address = await Address.create({ username, ...data })
    return address
}


/**
 * 获取收货地址列表
 * @param {String} username 用户名
 */
async function getAddressList(username) {
    const addressList = await Address.find({ username }).sort({ updatedAt: -1 })
    return addressList
}

/**
 * 获取单个收货地址
 * @param {String} id 地址id
 */
async function getAddressById(id) {
    const address = await Address.findById(id)
    return address
}


/**
 * 更新收货地址
 * @param {String} id 地址id
 * @param {String} username 用户名
 * @param {Object} data 地址的详细信息
 */
async function updateAddress(id, username, data) {
    const address = await Address.findOneAndUpdate(
        { _id: id, username }, // 查询条件
        { username, ...data }, // 要更新的数据
        {
            new: true  // 返回更新之后的最新数据
        }
    )

    return address
}

module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress
}