import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue';

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
        path:'/login',
        component:Login
    },
]
})