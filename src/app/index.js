import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './core/app';
import FollowersStore from './stores/followers';

const Root = (
  <Provider FollowersStore={FollowersStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
/* import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/routes';
import Features from './features';

ReactDOM.render(<Routes routes={Features} />, document.getElementById('root'));
 */
