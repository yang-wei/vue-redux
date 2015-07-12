import ItemStore from '../store/ItemStore.js'
import ItemAction from '../action/ItemActionCreators'

const itemView = {
	template: `<table>
							 <tr v-repeat="item: items" track-by="id">
								 <td> {{ item.title }} </td>
								 <td><button v-on="click: removeItem(item.id)">X</button</td>
							 </tr>
						</table>
						<div>
							<input type="text" v-model="newItem.title">
							<button v-on="click: addItem">Add item</button>
						</div>
						`,
	data() {
		return ItemStore
	},
	compiled() {
		this.update()
		// listen for changes
		ItemStore.bind('change', this.update)
	},
	methods: {
		update() {
			this.resetItem()
			this.items = ItemStore.getAll()
		},

		addItem() {
			ItemAction.add(this.$data.newItem)
		},

		removeItem(item) {
			ItemAction.remove(item)
		},

		resetItem() {
			this.$data.newItem = ItemStore.resetItem()
		}
	}
}

export default itemView