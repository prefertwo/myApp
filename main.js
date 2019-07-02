import Vue from 'vue'
import App from './App'

import store from './store/index.js'

import PageHead from './components/page-head.vue'

Vue.component('page-head', PageHead);

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
