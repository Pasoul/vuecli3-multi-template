import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'policy', component: r => { require(['./views/Policy'], r) }, meta: { title: '隐私政策声明' }}
]

export default new VueRouter({
    routes: routes
})