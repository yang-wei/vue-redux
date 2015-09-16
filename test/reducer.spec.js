import { reducers } from '../src/reducers';
import expect from 'expect';

describe('Redux mixin', () => {

  describe('State', () => {

    it('should make first argument the initial state', () => {
      const state = {items: [1, 2, 3]};
      const action = {type: 'nothing'};
      const nextState = reducers(state, action);
      expect(nextState).toEqual(state);
    });

  });

  describe('add-item', () => {
    it('should add item to correct field', () => {
      const state = { items: [{id: 1, title: 'Item #1'}], other: 'should not change this' };
      const action = {type: 'add-item', title: 'Item #2'};
      const nextState = reducers(state, action);
      expect(nextState.items.length).toBeGreaterThan(state.items.length);
      expect(nextState.other).toEqual('should not change this');
    });
  });

  describe('remove-item', () => {
    it('should remove item of the correct field', () => {
      const state = { items: [{id: 1, title: 'Item #1'}], other: 'should not change this' };
      const action = {type: 'remove-item', id: 1};
      const nextState = reducers(state, action);
      expect(nextState.items.length).toBeLessThan(state.items.length);
      expect(nextState.other).toEqual('should not change this');
    });
  });

});
