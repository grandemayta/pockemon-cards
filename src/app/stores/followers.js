import { configure, decorate, observable, computed, flow } from 'mobx';

configure({ enforceActions: true });

class FollowersStore {
  followers = [];

  get followersCount() {
    return this.followers.length;
  }

  loadFollowers = flow(function* loadFollowers() {
    try {
      const response = yield fetch('https://api.github.com/users/grandemayta/followers');
      this.followers = yield response.json();
    } catch (error) {
      console.log(`Something go wrong: ${error}`);
    }
  });
}

decorate(FollowersStore, {
  followers: observable,
  followersCount: computed
});

export default new FollowersStore();
