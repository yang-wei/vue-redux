import Vue from 'vue'
import MircoEvent from 'microevent-github'
import AppDispatcher from './AppDispatcher'

console.log(new Vue())
// store
var ItemStore = {
	items: [
			{title: 'Item #1'},
	 	  {title: 'Item #2'},
			{title: 'Item #3'}
		],
	getAll() {
		return this.items
	}
}

MircoEvent.mixin(ItemStore)

AppDispatcher.register( payload => {
	switch( payload.eventName ) {
		case 'new-item':
			ItemStore.items.push( payload.newItem )
			// tell the world
			ItemStore.trigger( 'change' )
			break
	}
	return true
})

export default ItemStore