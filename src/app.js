import Vue from 'vue'
import items from './component/items'

import { createStore } from 'redux'
import { reducers } from './reducers'

const store = createStore(reducers)

new Vue({
  el: '#app',
  data: {
    store: store
  },
  components: {
    'items-view': items
  },
})
