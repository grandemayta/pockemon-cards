import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import FollowersStore from '../stores/followers';
import UserStore from '../stores/user';

const followers = FollowersStore.create();
const user = UserStore.create();

const stores = {
  followers,
  user
};

const Routes = props => (
  <Provider stores={stores}>
    <Router>
      <div>
        {props.routes.map(route => {
          if (route.exact) return <Route exact key={route.name} path={route.path} component={route.component} />;
          return <Route key={route.name} path={route.path} component={route.component} />;
        })}
      </div>
    </Router>
  </Provider>
);

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Routes;
