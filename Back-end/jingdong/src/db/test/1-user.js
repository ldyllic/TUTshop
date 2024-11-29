// 用户数据操作

const User = require('../../models/User')

!(async () => {
    // // 注册：创建一个新用户
    // await User.create({
    //     username: '15072719839',
    //     password: '123'
    // })
    // 登录：查询单个用户
    const user2 = await User.findOne({
        username: '15072719839',
        password: '123'
    })

    // 查询用户信息
    // const user1 = await User.findOne({
    //     username: '15072719833',
    //     password: '123'
    // })

    console.log(ctx.session.userInfo);
    const username = user1.username
    console.log(username);
})()