import { types, flow } from 'mobx-state-tree';
import Items from './items';

const Invoice = types
  .model('Invoice', {
    currency: types.string,
    is_paid: types.boolean,
    items: types.optional(Items, { items: [] }),
  })
  .actions(self => ({
    markPaid() {
      self.is_paid = true;
    },
    fetchData: flow(function* fetchData() {
      try {
        const response = yield fetch('https://api.github.com/users/grandemayta');
        console.info(response);
      } catch (error) {
        console.error('Failed to fetch users data');
      }
    })
  }))
  .views(self => ({
    status() {
      return self.is_paid ? 'Paid' : 'Not Paid';
    }
  }));

export default Invoice;
