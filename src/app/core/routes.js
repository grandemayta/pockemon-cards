import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import followers from '../stores/followers';
import user from '../stores/user';

const stores = {
  followers,
  user
};

const Routes = props => (
  <Router>
    <Provider stores={stores}>
      <React.Fragment>
        <CssBaseline />
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Pokemon Cards
              </Typography>
            </Toolbar>
          </AppBar>
          {props.routes.map(route => {
            if (route.exact) return <Route exact key={route.name} path={route.path} component={route.component} />;
            return <Route key={route.name} path={route.path} component={route.component} />;
          })}
        </div>
      </React.Fragment>
    </Provider>
  </Router>
);

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Routes;
