import MicroEvents from 'microevent-github'
import AppDispatcher from '../AppDispatcher'

const _items =  [{title: 'Item #1'}, {title: 'Item #2'}, {title: 'Item #3'}]

const ItemStore = {
	addItem(item) {
		_items.push( item )
	},

	removeItem(item) {
		let index = _items.indexOf(item);
	  _items.splice(index, 1);
	},

	resetItem() {
		return { title: ''}
	},

	getAll() {
		return _items
	}
}

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