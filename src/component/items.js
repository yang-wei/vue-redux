import * as ItemAction from '../action/ItemAction'
import { bindActionCreators } from 'redux'

export default {
	props: ['redux'],
	template: `<table>
							 <tr v-repeat="item: items" track-by="id">
								 <td> {{ item.title }} </td>
								 <td><button v-on="click: removeItem(item)">X</button></td>
							 </tr>
						</table>
						<input type="text" v-model="title" />
					  <button v-on="click: addItem">Add Item</button>
						`,
	data() {
		return {
			title: '',
			state: '',
			actions: ''
		}
	},
	computed: {
		items: function() {
			return this.state.items
		}
	},
	/* ------------- life cycle --------------- */
	created: function() {
		const handleChange = this.handleChange.bind(this)
		this.unsubscribe = this.redux.subscribe(handleChange)
		handleChange()
	},
	destroyed: function() {
		this.unsubscribe()
	},
	/* ------------- life cycle ends --------------- */
	/* ------------- methods ------------------- */
	methods: {
		handleChange() {
			this.state = this.redux.getState();
			this.actions = bindActionCreators(ItemAction, this.redux.dispatch);
		},
		addItem() {
			if(this.title.trim()) {
				this.actions.addItem(this.title)
			}
			this.title = ''
		},
		removeItem(item) {
			this.actions.removeItem(item.id)
		}
	},

}