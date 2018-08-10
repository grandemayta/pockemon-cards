import { types, flow } from 'mobx-state-tree';
import User from './user';

const Followers = types
  .model({
    items: types.array(User)
  })
  .actions(self => ({
    afterCreate() {
      self.fetchData();
    },
    fetchData: flow(function* fetchData() {
      try {
        const response = yield fetch('https://api.github.com/users/grandemayta/followers');
        self.items = yield response.json();
      } catch (error) {
        console.error('Failed to fetch users data', error);
      }
    })
  }));

export default Followers;
