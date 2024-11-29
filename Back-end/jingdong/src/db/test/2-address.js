// 地址数据操作

const Address = require('../../models/Address')

!(async () => {
    // 创建收货地址
    // await Address.create({
    //     username: '15072719839',
    //     city: '北京市',
    //     department: 'xx小区',
    //     houseNumber: '门牌号1',
    //     name: '张三',
    //     phone: '15072719839'
    // })
    // await Address.create({
    //     username: '15072719839',
    //     city: '北京市',
    // department: 'xx小区',
    // houseNumber: '门牌号1',
    // name: '张三',
    // phone: '15072719839'
    // })

    // // 获取收货地址列表（获取 15072719839 的）
    // const addressList = await Address.find({username:'15072719839'}).sort({updatedAt:-1})
    // console.log(addressList);

    // // 根据 id 获取单个收货地址
    // const id ='6746eb3a1d75fa3835c7e54c'
    // const address = await Address.findById(id)
    // console.log(address);

    // 更新收货地址
    // const id = '6746eb3a1d75fa3835c7e54c'
    // const newData = {
        // username: '15072719839',
        // city: '北京市',
        // department: 'xx小区A',
        // houseNumber: '门牌号1A',
        // name: '张三A',
        // phone: '15072711111'
    // }
    // const address = await Address.findOneAndUpdate(
    //     { _id: id, username: '15072719839' },
    //     newData,
    //     {
    //         new: true  // 返回更新之后的最新数据
    //     }
    // )
    // console.log(address);
})()