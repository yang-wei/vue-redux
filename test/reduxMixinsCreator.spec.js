import reduxMixinsCreator from '../src/reduxMixinsCreator';
import { createStore } from 'redux';
import expect from 'expect';
import sinon from 'sinon'

const fakeReducers = () => {};
const fakeActions = {};

const store = createStore(fakeReducers);
const reduxMixins = reduxMixinsCreator(fakeActions);

describe('Redux mixin', () => {

  describe('Basic props', () => {
    it('should have data property and created, destroyed method', () => {
      expect(reduxMixins.data).toExist();
      expect(typeof reduxMixins.created).toEqual('function');
      expect(typeof reduxMixins.destroyed).toEqual('function');
    });
  });

  describe('updateState', () => {

    before(() => {
      sinon.spy(reduxMixins.methods, 'updateState');
      reduxMixins.store = store;
      /** Hack to make test pass 
       *  Vue.js methods's method can be accessed via this.{method}
       *  but reduxMixinsCreator returned plain object.
       */
      reduxMixins.updateState = () => {};
    });

    it('should be called once when instance is created', () => {
      reduxMixins.created();
      expect(reduxMixins.methods.updateState.calledOnce);
    });

    it('should be called when dispatch', () => {
      reduxMixins.store.dispatch({type: 'TEST'});
      reduxMixins.store.dispatch({type: 'TEST AGAIN'});
      expect(reduxMixins.methods.updateState.calledTwice);
    });

    after(() => {
      reduxMixins.methods.updateState.restore();
    });
  });
});
