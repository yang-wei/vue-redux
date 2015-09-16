import expect from 'expect';
import * as ItemAction from '../../src/action/ItemAction'

describe('Item Action', () => {
  
  describe('add item', () => {
    it('should return correct type and title', () => {
      const result = ItemAction.addItem("title");
      expect(result.type).toContain('add-item');
      expect(Object.keys(result)).toContain('title');
    })
  });

  describe('remove item', () => {
    it('should return correct type and id', () => {
      const result = ItemAction.removeItem(5);
      expect(result.type).toContain('remove-item');
      expect(Object.keys(result)).toContain('id');
    })
  })

});