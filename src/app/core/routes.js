import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import Followers from '../models/followers';

const followers = Followers.create();

const Routes = props => (
  <Provider followers={followers}>
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
