export function addItem(title) {
	return {
		type: 'add-item',
		title
	};
}

export function removeItem(id) {
	return {
		type: 'remove-item',
		id
	};
}