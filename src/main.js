/*
 * @Date: 2020-05-07 21:19:16
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-07 21:55:41
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
