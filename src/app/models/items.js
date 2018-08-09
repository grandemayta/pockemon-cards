import { types } from 'mobx-state-tree';
import Item from './item';

const Items = types
  .model('Items', {
    items: types.array(Item)
  })
  .actions(self => ({
    add: item => {
      self.items.push(item);
    }
  }));

export default Items;
