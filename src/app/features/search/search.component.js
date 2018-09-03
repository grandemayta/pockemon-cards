import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
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
        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Pokemons found</ListSubheader>
          </GridListTile>
          {this.followers.items.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.imageUrl} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                actionIcon={
                  <IconButton>
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
