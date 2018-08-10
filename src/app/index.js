import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/app';
import Followers from './models/followers';

const followers = Followers.create();

ReactDOM.render(<App followers={followers} />, document.getElementById('root'));
/* import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/routes';
import Features from './features';

ReactDOM.render(<Routes routes={Features} />, document.getElementById('root'));
 */
