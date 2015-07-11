import AppDispatcher from '../AppDispatcher'

const ItemActions = {

	add(item) {
		AppDispatcher.dispatch({
			eventName: 'new-item',
			newItem: item
		})
	},

	remove(item) {
		AppDispatcher.dispatch({
			eventName: 'remove-item',
			item: item
		})
	}

}

export default ItemActions