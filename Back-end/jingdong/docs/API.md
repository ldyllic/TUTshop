# API （接口）设计

## 注册

### url 

`/api/user/register`

### method 

`post`

### request body

 ```js
 {
    username: '17671860650',
    password: '123abc'
 }
 ```

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 错误信息'
}
```

## 登录

### url 

`/api/user/login`

### method 

`post`

### request body

 ```js
 {
    username: '17671860650',
    password: '123abc'
 }
 ```

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 错误信息'
}
```

## 获取用户信息

### url 

`/api/user/info`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: {
        username: 'xxx'
    },
    message: 'errno !== 0 错误信息'
}
```


## 创建收货地址

### url 

`/api/user/address`

### method 

`post`

### request body

 ```js
 {
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '17671860650'
 }
 ```

### response body

```js
{
    errno: 0,
    data: {
        _id: '收货地址的 id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '17671860650',
        createdAt: Date,
        updatedAt: Date
    }
    message: 'errno !== 0 错误信息'
}
```

## 获取收货地址列表

### url 

`/api/user/address`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: [
        {
            _id: '收货地址的 id',
            city: '北京',
            department: 'xx小区',
            houseNumber: '门牌号',
            name: '张三',
            phone: '17671860650',
        }
    ],
    message: 'errno !== 0 错误信息'
}
```

## 获取单个收货地址

### url 

`/api/user/address/:id` (`:id` 是一个动态参数，服务端可获取具体的参数值)

示例：`/api/user/address/100`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: {
            _id: '收货地址的 id',
            city: '北京',
            department: 'xx小区',
            houseNumber: '门牌号',
            name: '张三',
            phone: '17671860650',
    },
    message: 'errno !== 0 错误信息'
}
```

## 更新收货地址

### url 

`/api/user/address/:id`

### method 

`patch` （Restful API 规范，更新数据）

### request body

 ```js
 {
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '17671860650',
 }
 ```

### response body

```js
{
    errno: 0,
    message: 'errno !== 0 错误信息'
}
```

## 附近(热门)商店

### url 

`/api/shop/hot-list`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: [
        {
            _id: '商店 id',
            name: '沃尔玛',
            imgUrl: '商店的图片 url',
            sales: 10000,  // 月售
            expressLimit: 0,  // 起送价格
            expressPrice: 5,  // 快递价格
            slogan: 'VIP 尊享满 89 元减 4 元运费券'
        }
    ],
    message: 'errno !== 0 错误信息'
}
```

## 商店详情

### url 

`/api/shop/:id`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: {
        _id: '商店 id',
        name: '沃尔玛',
        imgUrl: '商店的图片 url',
        sales: 10000,  // 月售
        expressLimit: 0,  // 起送价格
        expressPrice: 5,  // 快递价格
        slogan: 'VIP 尊享满 89 元减 4 元运费券'
    },
    message: 'errno !== 0 错误信息'
}
```

## 查询某个商店的商品列表

### url 

`/api/shop/:id/products`

### query

`tab = all`

举例：`/api/shop/:id/products?tab=seckill`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: [
        {
            _id: '商品 id',
            name: '番茄 250g/份',
            imgUrl: '商品的图片 url',
            sales: 10,  // 月售
            price: 33.6,
            oldPrice: 40.6
        },
    ],
    message: 'errno !== 0 错误信息'
}
```

## 创建订单

### url 

`/api/order`

### method 

`post`

### request body

 ```js
 {
    addressId: '收货地址的 id',
    shopId: '商店的 id',
    shopName: '商店的名称',
    isCanceled: false,  // 订单是否被取消
    products: [
        {
            id: '商品的id',
            num: 3  // 购买数量
        },
        {
            id: '商品的id',
            num: 5  // 购买数量
        }
    ]
 }
 ```

### response body

```js
{
    errno: 0,
    data: {
        _id: '订单 id'
    },
    message: 'errno !== 0 错误信息'
}
```

## 获取订单列表

### url 

`/api/order`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data: [
        {
            addressId: '收货地址的 id',
            shopId: '商店的 id',
            shopName: '商店的名称',
            isCanceled: false,  // 订单是否被取消
            products: [
                {
                    id: '商品的id',
                    num: 3  // 购买数量
                },
                {
                    id: '商品的id',
                    num: 5  // 购买数量
                }
            ]
        }
    ],
    message: 'errno !== 0 错误信息'
}
```


