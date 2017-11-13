// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BlockUI from 'vue-blockui'
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
import VueQuillEditor from 'vue-quill-editor'

import VeeValidate from 'vee-validate'
import messagesFa from 'vee-validate/dist/locale/fa'


import {
  Notification
} from './utils/notification'


import 'bulma/css/bulma.css'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressBar, options)


Vue.use(Toasted)
Vue.use(BlockUI)
Vue.use(VeeValidate);
Vue.use(VueQuillEditor)

VeeValidate.Validator.localize('fa', messagesFa);
Vue.config.productionTip = false


new Notification(Vue);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted() {    
  }
})
