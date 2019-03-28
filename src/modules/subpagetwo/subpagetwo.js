import Vue from 'vue'
import Subpagetwo from './Subpagetwo.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(Subpagetwo)
}).$mount('#subpagetwo')