import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'

// 'global' will hold all the global variables
export const global = new Vue({
  data: {
    companyFormData: {}
  }
})

// initiating 'VeeValidate'
Vue.use(VeeValidate)

// initiating onboarding app
new Vue({
  el: '#app',
  render: h => h(App)
})
