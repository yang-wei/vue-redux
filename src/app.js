import Vue from 'vue'
import items from './component/items'

import { createStore, applyMiddleware } from 'redux'
import { reducers } from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(reducers)

new Vue({
  el: '#app',
  data: {
    store: store
  },
  components: {
    'items-view': items
  },
})
