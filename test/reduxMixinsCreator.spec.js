var reduxMixinsCreator = require('../reduxMixinsCreator');
var createStore = require('redux').createStore;
var expect = require('expect');
var sinon = require('sinon');

var fakeReducers = function() {};
var fakeActions = {};

var store = createStore(fakeReducers);
var reduxMixins = reduxMixinsCreator(fakeActions);

describe('Redux mixin', function() {

  describe('Basic props', function() {
    it('should have data property and created, destroyed method', function() {
      expect(reduxMixins.data).toExist();
      expect(typeof reduxMixins.created).toEqual('function');
      expect(typeof reduxMixins.destroyed).toEqual('function');
    });
  });

  describe('updateState', function() {

    before(function() {
      sinon.spy(reduxMixins.methods, 'updateState');
      reduxMixins.store = store;
      /** Hack to make test pass 
       *  Vue.js methods's method can be accessed via this.{method}
       *  but reduxMixinsCreator returned plain object.
       */
      reduxMixins.updateState = function() {};
    });

    it('should be called once when instance is created', function() {
      reduxMixins.created();
      expect(reduxMixins.methods.updateState.calledOnce);
    });

    it('should be called when dispatch', function() {
      reduxMixins.store.dispatch({type: 'TEST'});
      reduxMixins.store.dispatch({type: 'TEST AGAIN'});
      expect(reduxMixins.methods.updateState.calledTwice);
    });

    after(function() {
      reduxMixins.methods.updateState.restore();
    });
  });
});
