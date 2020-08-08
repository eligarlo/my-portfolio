import Vue from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome Setup Start
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faLinkedin)
Vue.component('FontAwesome', FontAwesomeIcon)
// FontAwesome Setup End

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
