import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class Cards extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.cards = props.stores.cards;
    this.params = props.match.params;
  }

  componentDidMount() {
    this.cards.loadCards(this.params.id);
  }

  render() {
    return (
      <Grid container>
        <GridList cellHeight={200}>
          {this.cards.items.map(tile => (
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

export default inject('stores')(observer(Cards));
