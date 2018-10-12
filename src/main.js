// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'

// 1像素边框的解决方案
import 'styles/reset.css'

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
