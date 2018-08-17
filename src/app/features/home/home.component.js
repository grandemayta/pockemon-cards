import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

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
      <div>
        <h1>Followers</h1>
        <ul>
          {this.followers.items.map(follower => (
            <li key={follower.id}>{follower.name}</li>
          ))}
        </ul>
        <Link to="/contacts">User details</Link>
      </div>
    );
  }
}

export default inject('stores')(observer(Home));
