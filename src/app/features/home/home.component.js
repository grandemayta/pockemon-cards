import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    followers: PropTypes.any.isRequired
  };

  componentDidMount() {
    console.log('App component is active:', this.props);
  }

  render() {
    const { followers } = this.props;
    return (
      <div>
        <h1>Followers</h1>
        <ul>
          {followers.items.map(follower => (
            <li key={follower.id}>{follower.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default inject('followers')(observer(Home));
