import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Home extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.followers = props.stores.followers;
  }

  componentDidMount() {
    this.followers.fetchData();
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item container justify="center" xs={12}>
          <TextField label="Type the name" />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Button color="primary">Find Pokemon</Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            {this.followers.items.map(follower => (
              <ListItem key={follower.id} button>
                <ListItemText primary={follower.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Link to="/contacts">User details</Link>
      </Grid>
    );
  }
}

export default inject('stores')(observer(Home));
