import Vue from 'vue'
import App from './App.vue'
// Vue Router 추가
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 라우트 컴포넌트 정의
const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Not Found</div>' }
const Print = { template: '<div>Print Page</div>'}

// 라우터 인스턴스
const router = new VueRouter({
  mode: 'history', //크롬의 history 모드 사용해서 url에 #이 사용되는것 막음
  routes: [
    { path: '/', component: App},
    { path: '/login', component: Login},
    { path: '/print', component: Print},
    { path: '*', component: NotFound} //순서대로 매칭 시키다 여기 없으면 이것으로
  ] // routes 정의
})

// 루트 인스턴스
new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
