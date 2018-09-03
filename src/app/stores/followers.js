import { configure, decorate, observable, computed, flow } from 'mobx';

configure({ enforceActions: true });

class FollowersStore {
  items = [];

  get followersCount() {
    return this.items.length;
  }

  loadFollowers = flow(function* loadFollowers() {
    try {
      const response = yield fetch('https://api.github.com/users/grandemayta/followers');
      this.items = yield response.json();
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
