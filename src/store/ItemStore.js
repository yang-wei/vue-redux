import MicroEvents from 'microevent-github'
import AppDispatcher from '../AppDispatcher'

const _items = [{title: 'Item #1'}, {title: 'Item #2'}, {title: 'Item #3'}]

class itemStore {
	constructor(items = []) {
		this.items = items
		this.newItem = { title: ''}
	}

	addItem(item) {
		this.items.push( item )
	}

	removeItem(item) {
		const index = this.items.indexOf(item);
	  this.items.splice(index, 1);
	}

	resetItem() {
		return { title: ''}
	}

	getAll() {
		return this.items
	}
}

const ItemStore = new itemStore(_items)

MicroEvents.mixin(ItemStore)

AppDispatcher.register( payload => {
	switch( payload.eventName ) {
		case 'new-item':
			ItemStore.addItem(payload.newItem)
			break

		case 'remove-item':
			ItemStore.removeItem(payload.item)
			break
	}

	ItemStore.trigger('change')
	return true
})

export default ItemStore;