import reduxMixinCreator from '../src/reduxMixinCreator';
import { createStore } from 'redux';
import expect from 'expect';

const fakeReducers = () => {};
const fakeActions = {};

const store = createStore(fakeReducers);
const reduxMixin = reduxMixinCreator(fakeActions);

describe('Redux mixin', () => {

  it('should have data property and created, destroyed method', () => {
    expect(reduxMixin.data).toExist();
    expect(typeof reduxMixin.created).toEqual('function');
    expect(typeof reduxMixin.destroyed).toEqual('function');
  });

});
