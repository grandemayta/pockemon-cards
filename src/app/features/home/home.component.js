import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    FollowersStore: PropTypes.any.isRequired
  };

  componentDidMount = () => {
    this.props.FollowersStore.loadFollowers();
  }

  render() {
    const { FollowersStore } = this.props;
    return (
      <div>
        <h1>Followers</h1>
        <h2>You have {FollowersStore.followersCount} followers!</h2>
        <ul>
          {FollowersStore.followers.map(follower => (
            <li key={follower.id}>{follower.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default inject('FollowersStore')(observer(Home));
