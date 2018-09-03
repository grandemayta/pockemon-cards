import { configure, decorate, observable, computed, flow } from 'mobx';

configure({ enforceActions: true });

class FollowersStore {
  items = [];

  get followersCount() {
    return this.items.length;
  }

  loadFollowers = flow(function* loadFollowers(name) {
    try {
      const response = yield fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`);
      const json = yield response.json();
      this.items = json.cards;
    } catch (error) {
      console.log(`Something go wrong: ${error}`);
    }
  });
}

decorate(FollowersStore, {
  items: observable,
  followersCount: computed
});

export default new FollowersStore();
