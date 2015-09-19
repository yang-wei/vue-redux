import { bindActionCreators } from 'redux';

export default function(actionCreators) {

  return {

    data() {
      return {
        data: null,
        actions: null
      }
    },

    created() {
      var updateView = this.updateView.bind(this)
      this.unsubscribe = this.store.subscribe(updateView)
      this.actions = bindActionCreators(actionCreators, this.store.dispatch);
      updateView();
    },

    destroyed() {
      this.unsubscribe();
    },

    methods: {
      updateView() {
        this.data = this.store.getState();
      },
    }

  }

}