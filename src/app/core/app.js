import React, { Component } from 'react';
import { observer } from 'mobx-react';


class App extends Component {
  componentDidMount() {
    //this.props.followers.fetchData();
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

export default observer(App);
