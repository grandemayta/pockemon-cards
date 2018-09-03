import { configure, decorate, observable, flow } from 'mobx';

configure({ enforceActions: true });

class UserStore {
  item = [];

  loadUser = flow(function* loadUser() {
    try {
      const response = yield fetch('https://api.github.com/users/grandemayta');
      this.item = yield response.json();
    } catch (error) {
      console.log(`Something go wrong: ${error}`);
    }
  });
}

decorate(UserStore, {
  item: observable
});

export default new UserStore();
