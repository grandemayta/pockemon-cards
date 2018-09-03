import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

class Home extends Component {
  static propTypes = {
    stores: PropTypes.any.isRequired
  };

  constructor(props) {
    super();
    this.followers = props.stores.followers;
  }

  componentDidMount = () => {
    this.followers.loadFollowers();
  }

  render() {
    return (
      <div>
        <h1>Followers</h1>
        <h2>You have {this.followers.followersCount} followers!</h2>
        <ul>
          {this.followers.items.map(follower => (
            <li key={follower.id}>{follower.login}</li>
          ))}
        </ul>
        <Link to="/contacts">Detail</Link>
      </div>
    );
  }
}

export default inject('stores')(observer(Home));
