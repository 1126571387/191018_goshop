import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

//路由的懒加载 为给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题。
//懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。
const Msite =()=> import ('../pages/MSite/MSite.vue')
const Search =()=> import ('../pages/Search/Search.vue')
const Order =()=>import ('../pages/Order/Order.vue')
const Profile =()=> import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/msite',
        component:Msite,
        meta:{
            isshow:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            isshow:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{
            isshow:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            isshow:true
        }
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/shop',
        component: Shop,
        children: [
          {
            path: '/shop/goods',
            component: ShopGoods
          },
          {
            path: '/shop/ratings',
            component: ShopRatings
          },
          {
            path: '/shop/info',
            component: ShopInfo
          },
          {
            path: '',
            redirect: '/shop/goods'
          },
        ]
      },
]
})