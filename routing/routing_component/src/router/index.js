import Vue from 'vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Print from '../components/Print.vue'
import NotFound from '../components/NotFound.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/print', component: Print },
        { path: '*', component: NotFound }
    ]
})

export default router
