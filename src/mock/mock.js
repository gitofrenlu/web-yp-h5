// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
let backBase = "/business"

const base = "/mock" + backBase
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
// mock一组数据
const produceNewsData2 = function(current=1,pageSize=10) {
    let articles = [];

    for (let i = 0; i < pageSize; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {'status|1':[0,1],articles:articles}

}
const getGoods = function() {
        let data = {
            "result":[
                {
                    label:"大米",
                    goods:[{
                        id:1,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:2,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:3,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:4,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:5,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:6,
                        name:"东北大米",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                ]
                },
                {
                    label:"粮油",
                    goods:[{
                        id:1,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:2,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:3,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:4,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:5,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:6,
                        name:"葵花大豆油",
                        standard:"500g/桶",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                ]
                },
                {
                    label:"调料",
                    goods:[{
                        id:1,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:2,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:3,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:4,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:5,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                    {
                        id:6,
                        name:"花椒",
                        standard:"500g/袋",
                        imgUrl:"/static/rice/rice.jpeg"
                    },
                ]
                }
            ],
            code: 0,
            message:"success"
        }
        
        return data

}

const getOrderList = function(status) {
    let data = {
        "result":[{
                    createTime:"2018/08/03",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                },
                {
                    createTime:"2018/08/03",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                },
                {
                    createTime:"2018/08/03",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                },
                {
                    createTime:"2018/08/03",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                },
                {
                    createTime:"2018/08/03",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                },
                {
                    createTime:"2018/08/04",
                    totalPrice:500,
                    status:1,
                    goods:[
                        {
                            name:"大米",
                            standard:"500g/袋",
                            price:200
                        },
                        {
                            name:"粮油",
                            standard:"300g/袋",
                            price:300
                        }
                    ]
                }
            ]
            ,
        code: 0,
        message:"success"
    }
    
    return data

}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(`${base}/getGoods`, 'get', getGoods())
Mock.mock(`${base}/getOrderList`, 'post', getOrderList())

