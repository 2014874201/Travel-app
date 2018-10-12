// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'

// 1像素边框的解决方案
import './assets/styles/reset.css'

import fastClick from 'fastclick'

Vue.config.productionTip = false

// 绑定到body上，解决移动端300毫秒延迟（这是为了检查用户是否在做双击）
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
