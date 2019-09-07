//插件引入
import Vue from 'vue'
import 'lib-flexible'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store'

// css 引入
import '@/assets/font/iconfont.css'
//axios 相应拦截器
axios.interceptors.response.use((res)=>{
  //console.log(res.data);
  return res.data;
});
//引入axios
Vue.prototype.$axios = axios
//
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
