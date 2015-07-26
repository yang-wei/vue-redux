const initialState = [{id: 1, title: 'Item #1'}, {id: 2, title: 'Item #2'}, {id: 3, title: 'Item #3'}]

export default function items(state = initialState, action) {

	switch(action.type) {
		case 'add-item':
			return [...state, {
				id: (state.length === 0) ? 0 : state.length + 1,
				title: action.title
			}];

		case 'remove-item':
		  return state.filter(todo =>
	  		todo.id !== action.id
	    )

		default:
			return state;
	}
};