import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'aboutus', component: r => { require(['./views/AboutUs'], r) }, meta: { title: '关于我们' }}
]

export default new VueRouter({
    routes: routes
})