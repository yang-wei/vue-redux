import MicroEvents from 'microevent-github'
import AppDispatcher from '../AppDispatcher'

const _items = [{id: 1, title: 'Item #1'}, {id: 2, title: 'Item #2'}, {id: 3, title: 'Item #3'}]

const _item = (n) => {
	return {id: n, title: `Item #${n}`}
}

const _largeItems = (n = 0) => {
	const _items = []
	while(n--) {
		_items.push(_item(n))
	}
	return _items
} 

class itemStore {
	constructor(items = []) {
		this.items = items
		this.newItem = { title: ''}
	}

	addItem(item) {
		this.items.push(item)
	}

	removeItem(id) {
		// we have to track it by using id because Vue data is not plain js object =(
		this.items = this.items.filter(function(ele) {
			return ele.id !== id
		})
	}

	resetItem() {
		return { title: ''}
	}

	getAll() {
		return this.items
	}
}
const ItemStore = new itemStore(_largeItems(100))

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