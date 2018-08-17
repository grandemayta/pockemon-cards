import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.userStore = props.stores.user;
  }

  componentDidMount() {
    this.userStore.fetchData();
  }

  render() {
    return (
      <div>
        <h1>User Detail</h1>
        <h2>{this.userStore.item && this.userStore.item.name}</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default inject('stores')(observer(Contacts));
