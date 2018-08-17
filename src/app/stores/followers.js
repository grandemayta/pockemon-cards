import { types, flow } from 'mobx-state-tree';
import User from '../models/user';

const FollowersStore = types
  .model('followers', {
    items: types.array(User)
  })
  .actions(self => ({
    fetchData: flow(function* fetchData() {
      try {
        const response = yield fetch('https://api.pokemontcg.io/v1/cards?name=charizard');
        const json = yield response.json();
        self.items = json.cards;
      } catch (error) {
        console.error('Failed to fetch users data', error);
      }
    })
  }));

export default FollowersStore;
