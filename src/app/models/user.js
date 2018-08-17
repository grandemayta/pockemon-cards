import { types } from 'mobx-state-tree';

const User = types.model({
  id: types.string,
  name: types.string,
  nationalPokedexNumber: types.optional(types.number, -1),
  hp: types.optional(types.string, ''),
  imageUrl: types.string,
  imageUrlHiRes: types.string,
  types: types.array(types.string),
  number: types.string,
  subtype: types.string,
  supertype: types.string,
  attacks: types.array(types.model({
    cost: types.array(types.string),
    name: types.string,
    text: types.optional(types.string, ''),
    damage: types.string,
    convertedEnergyCost: types.number
  })),
  text: types.array(types.string),
  weaknesses: types.array(types.model({ type: types.string, value: types.string })),
  resistances: types.array(types.model({ type: types.string, value: types.string })),
  retreatCost: types.array(types.string),
  convertedRetreatCost: types.optional(types.number, -1),
  artist: types.string,
  set: types.string,
  setCode: types.string,
  rarity: types.string
});

export default User;
