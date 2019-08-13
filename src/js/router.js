import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)


import account from '../main/account.vue'
import goodslist from '../main/goodslist.vue'
import login from '../main/login.vue'
import register from '../main/register.vue'

var router = new vueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
})

export default router;