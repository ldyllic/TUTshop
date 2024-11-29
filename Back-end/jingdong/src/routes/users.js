const router = require('koa-router')()
const { register, login } = require('../controller/user')
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

// 用户注册
router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body

  try {
    // 新建用户
    const newUser = await register(username, password)
    // ctx.body = {
    //   errno: 0,
    //   data: newUser
    // }
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    console.error(ex)
    // ctx.body = {
    //   errno: 10001,
    //   message: `注册失败 - ${ex.message}`
    // }
    ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
  }
})


// 用户登录
router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  // 用户登录
  const res = await login(username, password)
  if (res) {
    // 登录成功
    // 设置session
    ctx.session.userInfo = { username }
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel(10002, '登录验证失败，用户名或密码错误')
  }
})


// 获取用户信息
router.get('/info', loginCheck, async function (ctx, next) {
  // 获取用户信息
  const userInfo = ctx.session.userInfo
  if (userInfo) {
    ctx.body = new SuccessModel(userInfo)
  } else {
    ctx.body = new ErrorModel(10000, '获取用户信息失败，可能未登录')
  }
})

module.exports = router
