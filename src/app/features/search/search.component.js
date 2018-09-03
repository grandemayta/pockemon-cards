import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
  static propTypes = {
    history: PropTypes.any.isRequired
  };

  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.updateTextTyped = this.updateTextTyped.bind(this);
    this.state = { searched: '' };
  }

  updateTextTyped(e) {
    e.preventDefault();
    this.setState({ searched: e.target.value });
  }

  handleSearch() {
    this.props.history.push(`/cards/${this.state.searched}`);
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
      </Grid>
    );
  }
}

export default Search;
