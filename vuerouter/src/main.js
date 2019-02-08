import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 루트 인스턴스
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})