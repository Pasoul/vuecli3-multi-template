import Vue from 'vue'
import Subpageone from './Subpageone.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(Subpageone)
}).$mount('#subpageone')