import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import followers from '../stores/followers';
import user from '../stores/user';

const stores = {
  followers,
  user
};

const Routes = props => (
  <Router>
    <Provider stores={stores}>
      <div>
        {props.routes.map(route => {
          if (route.exact) return <Route exact key={route.name} path={route.path} component={route.component} />;
          return <Route key={route.name} path={route.path} component={route.component} />;
        })}
      </div>
    </Provider>
  </Router>
);

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Routes;
