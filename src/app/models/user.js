import { types } from 'mobx-state-tree';

const User = types.model('User', {
  login: types.string,
  id: types.number,
  node_id: types.string,
  avatar_url: types.string,
  gravatar_id: types.string,
  url: types.string,
  html_url: types.string,
  followers_url: types.string,
  following_url: types.string,
  gists_url: types.string,
  starred_url: types.string,
  subscriptions_url: types.string,
  organizations_url: types.string,
  repos_url: types.string,
  events_url: types.string,
  received_events_url: types.string,
  type: types.string,
  site_admin: types.boolean
});

export default User;
