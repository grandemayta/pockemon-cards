import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/app';
import Invoice from './models/invoice';

const invoice = Invoice.create({ currency: 'EUR', is_paid: false });

ReactDOM.render(<App invoice={invoice} />, document.getElementById('root'));
/* import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/routes';
import Features from './features';

ReactDOM.render(<Routes routes={Features} />, document.getElementById('root'));
 */
