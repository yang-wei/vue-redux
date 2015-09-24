import { bindActionCreators } from 'redux';

export default function(actionCreators) {

  return {

    data() {
      return {
        state: null,
        actions: null
      }
    },

    created() {
      var updateState = this.updateState.bind(this)
      this.unsubscribe = this.store.subscribe(updateState)
      this.actions = bindActionCreators(actionCreators, this.store.dispatch);
      updateState();
    },

    destroyed() {
      this.unsubscribe();
    },

    methods: {
      updateState() {
        this.state = this.store.getState();
      },
    }

  }

}