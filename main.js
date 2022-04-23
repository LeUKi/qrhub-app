import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false // vue3 不再需要
App.mpType = 'app' // vue3 不再需要
const app = new Vue({
	...App
})
app.$mount()
