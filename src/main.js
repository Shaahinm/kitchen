// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import BlockUI from 'vue-blockui'
import Toasted from 'vue-toasted'
import VueProgressiveImage from 'vue-progressive-image'

import {Notification} from './utils/notification'
import {Theme} from './utils/theme'

import 'vue-material/dist/vue-material.css'


Vue.use(VueMaterial)
Vue.use(Toasted)
Vue.use(BlockUI)
Vue.use(VueProgressiveImage)
Vue.config.productionTip = false


new Notification(Vue);
new Theme(Vue);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

