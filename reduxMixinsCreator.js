var redux = require('redux');
var bindActionCreators = redux.bindActionCreators;

let ReduxMixinsCreator = function(actionCreators) {

  return {

    data: function() {
      return {
        state: null,
        actions: null
      }
    },

    created: function() {
      var updateState = this.updateState.bind(this)
      this.unsubscribe = this.store.subscribe(updateState)
      this.actions = bindActionCreators(actionCreators, this.store.dispatch);
      updateState();
    },

    destroyed: function() {
      this.unsubscribe();
    },

    methods: {
      updateState: function() {
        this.state = this.store.getState();
      },
    }
  }

}

module.exports = ReduxMixinsCreator;
