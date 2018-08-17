import { types, flow } from 'mobx-state-tree';
import User from '../models/user';

const UserStore = types
  .model('user', {
    item: types.frozen()
  })
  .actions(self => ({
    fetchData: flow(function* fetchData() {
      try {
        const response = yield fetch('https://api.pokemontcg.io/v1/cards/xyp-XY121');
        const json = yield response.json();
        self.item = json.card;
      } catch (error) {
        console.error('Failed to fetch users data', error);
      }
    })
  }));

export default UserStore;
