import Vue from 'vue'
import items from './component/items'

import { createRedux } from 'redux'
import * as store from './store'

Vue.config.debug = true

new Vue({
	el: '#app',
	data: {
		redux: createRedux(store)
	},
	components: {
		'items-view': items
	},
})
