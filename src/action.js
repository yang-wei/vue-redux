import AppDispatcher from './AppDispatcher'

const ItemActions = {

	add(item) {
		AppDispatcher.dispatch({
			eventName: 'new-item',
			newItem: item
		})
	}

}

export default ItemActions