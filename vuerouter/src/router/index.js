import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'
import Login from './Login'
import Print from './Print'
import NotFound from './NotFound'

Vue.use(VueRouter)

// 라우터 인스턴스
const router = new VueRouter({
  mode: 'history', //크롬의 history 모드 사용해서 url에 #이 사용되는것 막음
  routes: [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/print', component: Print},
    { path: '*', component: NotFound} //순서대로 매칭 시키다 여기 없으면 이것으로
  ] // routes 정의
})

export default router //모듈로 사용할 수 있도록