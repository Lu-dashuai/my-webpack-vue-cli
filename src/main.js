//导入vue
import Vue from 'vue'
import app from './main/App.vue'
import router from './js/router.js'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})