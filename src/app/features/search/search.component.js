import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.followers = props.stores.followers;
    this.handleSearch = this.handleSearch.bind(this);
    this.updateTextTyped = this.updateTextTyped.bind(this);
    this.state = { searched: '' };
  }

  updateTextTyped(e) {
    e.preventDefault();
    this.setState({ searched: e.target.value });
  }

  handleSearch() {
    this.followers.loadFollowers(this.state.searched);
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <TextField label="Search a pokemon..." type="text" fullWidth onChange={this.updateTextTyped} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Button color="primary" onClick={this.handleSearch}>Search</Button>
          </Grid>
        </Grid>
        <GridList cellHeight={200}>
          {this.followers.items.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.imageUrl} alt={tile.name} />
              <GridListTileBar
                title={<span>Name: {tile.name}</span>}
                subtitle={<span>Hp: {tile.hp}</span>}
                actionIcon={
                  <IconButton style={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    );
  }
}

export default inject('stores')(observer(Search));
