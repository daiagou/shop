import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/shop/Shop.vue'
import ShoppingCart from './views/shop/ShoppingCart.vue'
import Me from './views/shop/Me.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Shop
        // },

        {
            path: '/',
            component: Home,
            children: [
                { path: '', component: Shop, name: 'Shop' },
                { path: '/shop', component: Shop, name: 'Shop' },
                { path: '/shoppingCart', component: ShoppingCart, name: 'ShoppingCart' },
                { path: '/me', component: Me, name: 'Me' },
            ]
        },


        // {
        //     path: '/shop',
        //     name: 'shop',
        //     component:Shop
        // },
        // {
        //     path: '/test',
        //     name: 'test',
        //     component:test
        // },

        // {
        //     path: '/login',
        //     name: 'login',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
