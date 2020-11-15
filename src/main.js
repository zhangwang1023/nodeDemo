import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueStorage from 'vue-ls'
// import 'amfe-flexible' 手机端页面
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


const storageOptions = {
    namespace: 'base__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
}

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.use(VueStorage, storageOptions)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.prototype.axios = Axios
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
    /*路由发生改变修改页面的title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')