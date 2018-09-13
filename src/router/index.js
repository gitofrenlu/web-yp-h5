
import index from '@/components/index'
import mycart from '@/components/mycart'
import myorder from '@/components/orderPage'
import userPage from '@/components/userPage'

let routes = [
    {
        path: '/',
        component: index,
        meta:{title:"远鹏商贸"}
    },
    {
        path: '/index',
        component: index,
        meta:{title:"远鹏商贸"}
    },
    {
        path: '/mycart',
        component: mycart,
        meta:{title:"购物车"}
    },
    {
        path: '/myorder',
        component: myorder,
        meta:{title:"我的订单"}
    },
    {
        path: '/user',
        component: userPage,
        meta:{title:"会员中心"}
    }
];

export default routes;