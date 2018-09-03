import { configure, decorate, observable, computed, flow } from 'mobx';

configure({ enforceActions: true });

class CardsStore {
  items = [];

  get cardsCount() {
    return this.items.length;
  }

  loadCards = flow(function* loadCards(name) {
    try {
      const response = yield fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`);
      const json = yield response.json();
      this.items = json.cards;
    } catch (error) {
      console.log(`Something go wrong: ${error}`);
    }
  });
}

decorate(CardsStore, {
  items: observable,
  cardsCount: computed
});

export default new CardsStore();
