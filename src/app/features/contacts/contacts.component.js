import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.user = props.stores.user;
  }

  componentDidMount() {
    this.user.loadUser();
  }

  render() {
    return (
      <div>
        <h1>Detail Page</h1>
        <h3>{this.user.item.login}</h3>
      </div>
    );
  }
}

export default inject('stores')(observer(Contacts));
