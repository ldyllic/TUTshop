# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```js
{
    _id: 'xxx',
    username: '17671860650',
    password: '123'
}
```

## 地址

```js
{
    _id: 'xxx',
    username: '17671860650',  // 和用户产生关联
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '15072719839'
}
```

## 商店

```js
{
    _id: 'xxx',
    name: '沃尔玛',
    imgUrl: 'xxx.png',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP 尊享满 89 元减 4 元运费券'
}
```

## 商品

```js
{
    _id: 'xxx',
    shopId: 'xxx',   // 对应商店的 id
    name: '番茄',
    imgUrl: 'xxx.png',
    sales: 10,
    price: 33.6,
    oldPrice: 40.6,
    tabs: ['all','seckill']    // 左侧 tab 类型
}
```

## 订单

```js
{
    username: '15072719839',
    _id: 'xxx',
    shopId: '商店的 id',
    shopName: '商店的名称',
    isCanceled: false,  // 订单是否被取消
    address: {
        username: '15072719839',
        city: '北京市',
        department: 'xx小区',
        houseNumber: '门牌号1',
        name: '张三',
        phone: '15072719839'
    },
    products: [
        {
            product: {
                shopId: '6746fbf9d7bf7e814a22ada3', 
                name: '西瓜',
                imgUrl: '/images/product/watermelon.jpg',
                sales: 180, // 月售多少
                price: 13, // 当前价格
                oldPrice: 15, // 原价
                tabs: ['all', 'seckill', 'fruit']
            },
            orderSales: 3
        }
    ]
}
```