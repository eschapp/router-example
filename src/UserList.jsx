import React, { Component } from 'react';
import UserItem from './UserItem.jsx';

export default class UserList extends Component {
  render() {
    return (
      <div>
        <h1>I am the user list</h1>
        Example Nav - Example Nav
        <UserItem />
        <UserItem />
        {this.props.children}
      </div>
    );
  }
}
