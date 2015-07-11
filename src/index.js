import Vue from 'vue'
import AppDispatcher from './AppDispatcher'
import ItemAction from './action'
import ItemStore from './store'

Vue.config.debug = true

// view
new Vue({
	el: '#app',
	data: {
		items: ItemStore.getAll(),
		newItem: { title: ''},
	},
	ready() {
		//this.listChanged()
		ItemStore.bind('change', this.listChanged)
	},

	methods: {
		addItem() { ItemAction.add(this.$data.newItem) },
		
		listChanged() {
			this.$data.$set('items', ItemStore.getAll())
			this.$data.$set('newItem', { newItem: { title: ''}})
		}
	}
})


