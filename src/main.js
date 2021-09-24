import Vue from 'vue'
import App from './App.vue'
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAddressBook, faTimes, faCheckSquare, faGraduationCap, faUsers, faClipboardList, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faCoffee, faAddressBook, faTimes, faCheckSquare, faGraduationCap, faUsers, faClipboardList, faClipboardCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')